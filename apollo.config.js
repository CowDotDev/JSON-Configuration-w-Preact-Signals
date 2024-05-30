// TODO - The Apollo GraphQL VsCode extension is not working with our package json denoting `type: "module"`
// There is no workaround I have found, here is the open issue: https://github.com/apollographql/vscode-graphql/issues/100
export default {
  client: {
    service: {
      localSchemaFile: './src/schema.graphql',
    },
    includes: ['./src/graphql/**/*.gql'],
    excludes: [
      './src/graphql/types.generated.ts',
      './src/graphql/**/*.generated.ts',
      './src/graphql/**/*.generated.tsx',
    ],
  },
};
