const express = require("express")
const RegisterRouter = express.Router()

RegisterRouter.post('/',(req,res)=>{
    // console.log('register')
    // res.redirect("/register")
    // console.log('!!!!')
    console.log('post')
    res.send({ok:1})
})
RegisterRouter.get('/',(req,res)=>{
    // console.log('register')
    // res.redirect("/register")
    // console.log('!!!!')
    console.log('get if')
    res.render('register')
    // res.send({ok:1})
})



module.exports = RegisterRouter