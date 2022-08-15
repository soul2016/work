const express = require("express")
const HomeRouter = express.Router()
const mod = require('../mod/mod')

HomeRouter.get('/', (req, res) => {
    console.log("get")
    mod.find({}).then(data => {
        res.render("home", { data: data })
    })
})


module.exports = HomeRouter