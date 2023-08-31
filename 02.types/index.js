const { gql, ApolloServer } = require("apollo-server")

const typeDefs = gql`

`

const resolvers = {}


const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()