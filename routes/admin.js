const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
require('../models/Categoria')
const Categoria = mongoose.model("categorias")

router.get('/', (req, res) => {
    res.render("admin/index")
})
router.get('/posts', (req, res) => {
    res.render("")
})

router.get('/categorias', (req, res) => {
    Categoria.find().lean().sort({ date: 'desc' }).then((categorias) => {
        res.render("admin/categorias", { categorias: categorias })
    }).catch((error) => {
        req.flash("error_msg", "Houve um erro ao listar as categorias")
        res.redirect("/admin")
    })

})

router.get('/categorias/add', (req, res) => {
    res.render("admin/addcategorias")
})

router.post('/categorias/nova', (req, res) => {

    let erros = []

    if (!req.body.nome || typeof req.body.nome === undefined || req.body.nome === null) {
        erros.push({ texto: "Nome inválido" })
    }

    if (!req.body.slug || typeof req.body.slug === undefined || req.body.slug === null) {
        erros.push({ texto: "Slug inválido" })
    }

    if (req.body.nome.length < 2) {
        erros.push({ texto: "Nome da categoria muito pequeno" })

    }

    if (erros.length > 0) {
        res.render("admin/addcategorias", { erros: erros })
    } else {
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        }

        new Categoria(novaCategoria).save().then(() => {
            req.flash("success_msg", "Categoria criado com sucesso! ")
            res.redirect("/admin/categorias")
        }).catch((error) => {
            req.flash("error_msg", "Houve um erro ao salvar a categoria, tente novamente!")
            res.redirect("/admin")
        })

    }
});

router.get("/categorias/edit/:id", (req, res) => {
    Categoria.findOne({ _id: req.params.id }).lean().then((categoria) => {
        res.render("admin/editcategorias", { categoria: categoria })
    }).catch((error) => {
        req.flash("error_msg", "Esta categoria não existe")
        res.redirect("/admin/categorias")
    })

})

router.post("/categorias/edit", (req, res) => {

    let errors = []


    if (!req.body.nome || req.body.nome === null || req.body.nome.length < 2) {
        errors.push({ texto: "Nome de categoria inválido ou muito pequeno." })
    }

    if (!req.body.slug || req.body.slug === null || req.body.slug.length < 2) {
        errors.push({ texto: "Slug inválido ou muito pequeno." })
    }


    if (errors.length > 0) {


        Categoria.findOne({ _id: req.body.id }).lean().then((categoria) => {

            res.render("admin/editcategorias", { errors: errors, categoria: categoria });
        }).catch((err) => {
            req.flash("error_msg", "Erro ao buscar a categoria para re-renderizar.");
            res.redirect("/admin/categorias");
        });

    } else {

        Categoria.findOne({ _id: req.body.id }).then((categoria) => {

            if (!categoria) {
                req.flash("error_msg", "Categoria não encontrada para edição.");
                return res.redirect("/admin/categorias");
            }

            categoria.nome = req.body.nome
            categoria.slug = req.body.slug

            categoria.save().then(() => {
                req.flash("success_msg", "Categoria editada com sucesso! ")
                res.redirect("/admin/categorias")
            }).catch((err) => {
                req.flash("error_msg", "Houve um erro interno ao salvar a edição da categoria: " + err); // Mostre o erro para debug
                res.redirect("/admin/categorias")
            })

        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao buscar a categoria para edição.")
            res.redirect("/admin/categorias")
        })
    }
})



module.exports = router