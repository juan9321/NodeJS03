// hoje iremos colocar o mysql no projeto :) 
//o prof passou um desafio, LOL


//importacao do modulo express
const express = require("express")
const agendamentos = require("./banco")
//ultilizacao do express
const app = express()
//porta do servidor
app.listen(8801, function(){
    console.log("O servidor está ativo!")
})

app.get("/", function(req, res){
    res.end("Node")
})

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao/", function(req, res){
    res.send( + "<br>" + req.params.b + "<br>" + req.params.c)
    agendamentos.create({
        nome: req.params.nome,
        endereco:req.params.endereco,
        bairro:req.params.bairro,
        cep:req.params.cep,
        cidade:req.params.cidade,
        estado:req.params.estado,
        observacao:req.params.observacao
    })
})