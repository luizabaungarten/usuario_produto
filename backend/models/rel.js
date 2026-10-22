const Usuario = require('./Usuario')
const Produto = require('./Produto')

Usuario.hasMany(Produto, {
    foreignKey: 'idUsuario',
    as: 'produtoUsuario',
    onDelete: 'CASCADE'
})

Produto.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    as: 'usuarioProduto'
})

module.exports = {
    Usuario,
    Produto
}