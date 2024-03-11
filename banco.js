//nesse arquivo estara todas as configuracoes do banco de dados

const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Servidor Ativo!")
}).catch(function(erro){
    console.log("Falha de conexão: " + erro)
})

const agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.STRING
    }
 
})









agendamentos.create({

    nome: "Juan Farias",
    endereco: "Rua beira mar",
    bairro: "Jd pereira",
    cep: "23723-273",
    cidade: "Sao paulo",
    estado: "SP",
    observacao: "Teste"

})


module.exports = agendamentos

//agendamentos.sync({force: true})