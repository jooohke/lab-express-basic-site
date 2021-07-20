const express = require("express");
const hbs = require("hbs");


const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res, next) => {
    res.render("home.hbs", {
        css: ["home.css", "main.css"]
    })
})

app.get("/about", (req, res, next) => {
    res.render("about.hbs", {
        css: ["about.css", "main.css"],
    })
})

app.get("/works", (req, res, next) => {
    res.render("works.hbs", {
        css: ["works.css", "main.css"],
        js: ["https://unpkg.com/axios/dist/axios.min.js", "./js/script.js"]
    })
})

app.get("/gallery", (req, res, next) =>  {
    res.render("gallery.hbs", {
        css: ["gallery.css", "main.css"]
    })
})

app.listen(4000)

