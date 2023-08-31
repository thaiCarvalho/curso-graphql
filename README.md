# curso-graphql

01.Introdução
 - gerar package.json > npm init -y
 - instalar pacotes: nodemon e graphql apollo-server
  * npm i -D nodemon
  * npm i -D graphql apollo-server
 - no package.json adicionar o script para start do apollo-server "start": "nodemon"

`
  query {
    hello
  }

  {
    "data": {
      "hello": "World"
    }
  }
`

02.Types

- Type Scalar
  * Int
  * Float
  * String
  * Boolean
  * ID

- Type Query