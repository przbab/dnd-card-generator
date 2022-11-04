import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'https://www.dnd5eapi.co/graphql',
    documents: ['src/grqphql/fragments/*.ts', 'src/grqphql/queries/*.ts'],
    generates: {
        './src/types/grqphql.ts': {
            plugins: ['typescript', 'typescript-operations'],
            config: {
                avoidOptionals: true,
                skipTypename: true,
                defaultScalarType: 'unknown',
            },
        },
    },
};

export default config;
