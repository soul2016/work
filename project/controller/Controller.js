const Services = require("../service/service")

//业务处理，接收数据与返回数据


const Controller = {
    add: async (req, res) => {
        const {username,password,email,telephone } = req.body
        await Services.add(username,password,email,telephone)
        console.log('add_control')
        res.send({"ok":"已添加"})
    },
    update: async (req, res) => {
        const { username,password,email,telephone } = req.body
        await Services.update(username,password,email,telephone, req.params.id)
        res.send({"ok":"已更新"})
    },
    delete: async (req, res) => {
        await Services.delete(req.params.id)
        res.send({ ok: "已删除" })
    },
    find: async (req, res) => {
        var data = await Services.find()
        res.send(data)
    },
}


module.exports = Controller