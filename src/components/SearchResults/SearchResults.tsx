import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import graphqlClient from '../../services/graphqlClient';
import { spellsQuery } from '../../grqphql/queries/spells';
import { QuerySpellsArgsApiType } from '../../types/grqphql';
import { getQueryParam } from '../../helpers/routing';

export function SearchResults() {
    const router = useRouter();
    const [searchResults, setSearchResults] = useState([]);
    const searchQuery = getQueryParam(router.query.query);

    useEffect(() => {
        graphqlClient
            .query<QuerySpellsArgsApiType>({
                query: spellsQuery,
                variables: { name: searchQuery, limit: 10 },
            })
            .then((result) => {
                setSearchResults(result.spells);
            })
            .catch(() => {
                // TODO handle error state
            });
    }, [searchQuery]);

    return (
        <ul>
            {searchResults.map((searchResult) => (
                <li key={searchResult.index}>{searchResult.name}</li>
            ))}
        </ul>
    );
}
