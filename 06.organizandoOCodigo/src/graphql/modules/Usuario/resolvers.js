const db = require('../../../db')

function geradorDeId(lista) {
  let novoId;
  let ultimoId = lista[lista.length -1]

  if(!ultimoId) {
    novoId = 0
  } else {
    novoId = ultimoId.id;
  }
  return ++novoId
}

module.exports = {
  Usuario: {
    perfil(usuario) {
      return db.perfis.find(p => p.id === usuario.perfil)
    }
  },

  Query: {
    usuario(_, args) {
      return db.usuarios.find((db) => db.id === args.id);
    },
    usuarios: () => db.usuarios
  },

  Mutation: {
    criarUsuario(_, {data}) {
      const { email } = data
      const usuarioExistente = db.usuarios.some(u => u.email === email)

      if(usuarioExistente) {
        throw new Error(`Usuário existente: ${data.nome}`)
      }
      const novoUsuario = {
        ...data,
        id: geradorDeId(db.usuarios),
        perfil: 2
      }
      db.usuarios.push(novoUsuario)
      return novoUsuario
    },
    atualizarUsuario(_, {id, data}) {
      const usuario = db.usuarios.find(u => u.id === id)
      const indice = db.usuarios.findIndex(u => u.id === id)

      const novoUsuario = {
        ...usuario,
        ...data
      }

      db.usuarios.splice(indice, 1, novoUsuario)

      return novoUsuario
    }
  }
}