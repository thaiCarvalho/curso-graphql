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
    criarUsuario(_, args) {
      const novoUsuario = {
        ...args,
        id: geradorDeId(db.usuarios),
        perfil: 2
      }
      db.usuarios.push(novoUsuario)
      return novoUsuario
    }
  }
}