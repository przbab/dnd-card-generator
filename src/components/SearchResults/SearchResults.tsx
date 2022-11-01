import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import graphqlClient from '../../services/graphqlClient';
import { spellsQuery } from '../../grqphql/queries/spells';

export function SearchResults() {
    const router = useRouter();
    const [searchResults, setSearchResults] = useState([]);
    const searchQuery = router.query.query;

    useEffect(() => {
        graphqlClient
            .query({ query: spellsQuery, variables: { name: searchQuery, limit: 10 } })
            .then((result) => {
                setSearchResults(result.data.spells);
            })
            .catch((err) => {
                console.error(err);
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
