const express = require("express");
const hbs = require("hbs");
const axios = require("axios")

const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res, next) => {
    res.render("home.hbs")
})

app.get("/about", (req, res, next) => {
    res.render("about.hbs")
})

app.get("/works", (req, res, next) => {
    res.render("works.hbs")
})

app.get("/gallery", (req, res, next) =>  {
    res.render("gallery.hbs")
})

app.listen(4000)

