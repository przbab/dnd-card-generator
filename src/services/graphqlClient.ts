import { DocumentNode } from 'graphql';
import { print } from 'graphql/language/printer';
import getPersistedQueryHashClient from '../helpers/persistedQueryHash/client';
import getPersistedQueryHashServer from '../helpers/persistedQueryHash/server';
import { QueryApiType } from '../types/grqphql';

const getHash = process.env.CLIENT ? getPersistedQueryHashClient : getPersistedQueryHashServer;
const PERSISTED_QUERY_NOT_FOUND_ERROR_CODE = 'PERSISTED_QUERY_NOT_FOUND';
const SHOULD_USE_PERSISTED_QUERIES = true;
const API_URL = 'https://www.dnd5eapi.co/graphql';

type QueryBody<Variables> = {
    operationName: string;
    query: string;
    variables: Variables;
    extensions?: {
        persistedQuery?: {
            version: number;
            sha256Hash: string;
        };
    };
};

type QueryArguments<Variables> = {
    query: DocumentNode;
    variables?: Variables;
    headers?: Record<string, string>;
};

const isCryptoSupported = () =>
    !process.env.CLIENT ||
    (window.TextEncoder !== undefined && window.crypto !== undefined && window.crypto.subtle !== undefined); // Crypto.subtle is available only in secure contexts (HTTPS)

const shouldUsePersistedQuery = () => SHOULD_USE_PERSISTED_QUERIES && isCryptoSupported();

const getOperationName = (obj) => obj?.definitions?.[0]?.name?.value;

const getPersistedQueryDefinition = async (query) => ({
    persistedQuery: {
        version: 1,
        sha256Hash: await getHash(print(query)),
    },
});

async function fetchQuery<Variables>({ query, variables, headers }: QueryArguments<Variables>) {
    const body: QueryBody<Variables> = {
        operationName: getOperationName(query),
        variables,
        query: print(query),
    };

    if (shouldUsePersistedQuery()) {
        body.extensions = await getPersistedQueryDefinition(query);
    }

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Client-Id': 'dnd-card-generator',
            ...headers,
        },
        body: JSON.stringify(body),
    });

    if (response.ok) {
        const data = await response.json();

        return data.data as QueryApiType;
    }

    let responseText = '';
    try {
        responseText = await response.text();
    } catch (e) {
        // ignore error to not overshadow fetch error
    }

    // eslint-disable-next-line no-console
    console.error(
        { status: response.status, query: print(query), variables, response: responseText },
        'GraphQL query failed'
    );

    throw new Error('GraphQL query failed');
}

async function fetchPersistedQuery<Variables>({ query, variables, headers }: QueryArguments<Variables>) {
    const persistedQueryDefinition = await getPersistedQueryDefinition(query);

    const url = new URL(API_URL);
    url.searchParams.append('operationName', getOperationName(query));
    url.searchParams.append('variables', JSON.stringify(variables));
    url.searchParams.append('extensions', JSON.stringify(persistedQueryDefinition));

    const response = await fetch(url.href, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Client-Id': 'dnd-card-generator',
            'X-Apollo-Operation-Name': getOperationName(query),
            ...headers,
        },
    });

    if (response.ok) {
        const data = await response.json();

        if ((data?.errors ?? []).find((error) => error?.extensions?.code === PERSISTED_QUERY_NOT_FOUND_ERROR_CODE)) {
            throw new Error(PERSISTED_QUERY_NOT_FOUND_ERROR_CODE);
        }

        return data.data as QueryApiType;
    }

    throw new Error(`GraphQL persisted query failed ${url.href}`);
}

const graphqlClient = {
    query: async <Variables>({ query, variables, headers }: QueryArguments<Variables>) => {
        try {
            if (shouldUsePersistedQuery()) {
                // DO NOT REMOVE await HERE - it's required for fallback to fetchQuery to work
                return await fetchPersistedQuery<Variables>({ query, variables, headers });
            }
        } catch (e) {
            if (e.message !== PERSISTED_QUERY_NOT_FOUND_ERROR_CODE) {
                // eslint-disable-next-line no-console
                console.info('Persisted query failed', e);
            }
        }

        return fetchQuery<Variables>({ query, variables, headers });
    },
};

export default graphqlClient;
