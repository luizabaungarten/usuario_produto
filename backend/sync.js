const {Usuario, Produto} = require('./models/rel')
const conn = require('./db/conn')

async function SyncDataBase() { // Async -> programação assíncrona com o Banco de Dados
    try{
        await conn.sync({force: true}) // Await -> esprando o banco de Dados
        console.log(`Sincronizando as tabelas`)
    }catch(err){
        console.error(`Erro ao sincronizar as tabelas`,err)
    }finally{
        await conn.close() // Close -> fecha a conexão com o banco de dados
        console.log('Fechando a conexão com o Banco de dados')
    }
}
SyncDataBase() // Chama o programa para rodar