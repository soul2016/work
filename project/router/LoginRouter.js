const express = require("express")
const LoginRouter = express.Router()

LoginRouter.get('/', (req, res) => {
    console.log("get")
    res.render("login")
})


module.exports = LoginRouter