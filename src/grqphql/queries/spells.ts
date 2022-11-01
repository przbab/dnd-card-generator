import gql from 'graphql-tag';

export const spellsQuery = gql`
    query SpellsQuery($name: String, $limit: Int!) {
        spells(name: $name, limit: $limit) {
            name
            index
        }
    }
`;
