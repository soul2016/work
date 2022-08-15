//用express生成服务器
const express = require('express')
//连接数据库
require("./config/config")
//引入数据库模块
const mod = require('./mod/mod')
//获取路由
const LoginRouter = require('./router/LoginRouter')
const router = require('./router/router')
const RegisterRouter = require('./router/RegisterRouter')
const HomeRouter = require('./router/HomeRouter')

const app = express()

//添加模板引擎
app.set("views", "./views")
app.set("view engine", "ejs")

//配置静态资源
app.use(express.static('public'))//使用直接是localhost:3000/memo.html,或ejs加载图片

//配置解析post参数的，不用下载第三方
app.use(express.urlencoded({ extended: false }))//post参数:username=kerwin&password=1234
app.use(express.json())// post参数:{"name":"kerwin","age":13}

//路由连接
app.use('/api', router)
app.use('/login', LoginRouter)
app.use('/register', RegisterRouter)
app.use('/home',HomeRouter)


app.listen(3000, () => {
    console.log("server start")
})