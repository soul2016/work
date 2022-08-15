const mongoose = require("mongoose")
const Schema = mongoose.Schema
const contentType = {
    username:String,
    password:String,
    email:String,
    telephone:Number
}


const mod = mongoose.model("User",Schema(contentType))
module.exports = mod