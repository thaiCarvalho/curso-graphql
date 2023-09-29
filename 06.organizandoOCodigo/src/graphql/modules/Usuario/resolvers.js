const db = require('../../../db')
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
  }
}