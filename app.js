//Carregando módulos
const express = require('express')
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express()
//const mongoose = require('mongoose')

// Configurações
    //Body-Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //Handlebars
        app.engine('handlebars', engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    //Mongoose

// Rotas

// Outros
const port = 8086
app.listen(port , () => {
    console.log("Servidor Rodando! ")
})