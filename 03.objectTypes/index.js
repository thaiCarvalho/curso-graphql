const { gql, ApolloServer } = require("apollo-server")

/*
  > SCHEMA
  > Schema Defitition Lnaguage ou Linguagem de Denifinição de Esquema
  > SDL
*/

const produtos = [
  {
    id: 1,
    nome: 'Notebook',
    valor: 12000.32
  },
  {
    id: 2,
    nome: 'TV',
    valor: 6000.00
  }
]

const usuarios = [
  {
    id: 1,
    nome: 'Paulo',
    salario: 1234.56,
    idade: 25,
    ativo: true
  },
  {
    id: 2,
    nome: 'Fernando',
    salario: 4234.56,
    idade: 30,
    ativo: false
  },
]

const typeDefs = gql`

  type Usuario {
    id: ID
    nome: String
    salario: Float
    ativo: Boolean
    idade: Int
  }

  type Produto {
    id: ID
    nome: String
    valor: Float
  }

  type Query {
    usuarios: [Usuario],
    produtos: [Produto]
  }
`

const resolvers = {
  Query: {
    usuarios() {
      return usuarios

    },
    produtos() {
      return produtos
    }
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()