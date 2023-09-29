const { ApolloServer } = require("apollo-server")
// const { typeDefs, resolvers } = require('./src/graphql')
const graphql = require('./src/graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema');

const schema = makeExecutableSchema({
  // typeDefs,
  // resolvers
  ...graphql
});

const server = new ApolloServer({schema});

server.listen().then(({url}) => console.log(url));