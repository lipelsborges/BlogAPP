//Carregando módulos
const express = require('express')
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express()
const admin = require("./routes/admin")
const path = require("path")
const mongoose = require('mongoose')
const session = require("express-session")
const flash = require("connect-flash")

// Configurações
    //Sessão
        app.use(session({
            secret: "blogapp_secreta",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    //Middleware
        app.use((req, res, next) =>{
            res.locals.success_msg = req.flash("success_msg")                      //Uma variavel global !
            res.locals.error_msg = req.flash("error_msg")                          // Uma variavel global !
            next()
        })
    //Body-Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //Handlebars
        app.engine('handlebars', engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    //Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost/blogapp").then(() => {
            console.log("Conectado ao Banco de Dados!")
        }).catch((error) => {
            console.log("Houve um erro ao se conectar ao Banco de Dados: " +error)
        })
    //Public
        app.use(express.static(path.join(__dirname, "public")))

//Rotas
    app.use('/admin', admin)
// Outros
const port = 8086
app.listen(port , () => {
    console.log("Servidor Rodando! ")
})