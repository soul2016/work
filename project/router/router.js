const express = require("express")
const router = express.Router()
const Controller = require("../controller/Controller")

router.post("/",Controller.add)
router.get('/',Controller.find)

module.exports = router