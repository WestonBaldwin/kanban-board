import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_NHOST_GRAPHQL_URL || 'https://your-nhost-backend.herokuapp.com/v1/graphql',
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/__generated__/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
};

export default config;
