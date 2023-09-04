const { gql, ApolloServer } = require("apollo-server")

/*
  * Scalar Types
    - Int
    - Float
    - String
    - Boolean
    - ID
*/

const typeDefs = gql`
  type Query {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
  }
`

const resolvers = {
  Query: {
    idade () {
      return 18
    },
    salario () {
      return 188.155
    },
    nome () {
      return 'Graphql'
    },
    ativo () {
      return true
    },
    id () {
      return 1554597843106
    }
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()