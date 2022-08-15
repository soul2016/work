//数据库操作


//导入数据库
// const { update } = require("../controller/memocontroller")
const mod = require("../mod/mod")

const Services = {
    add: (username,password,email,telephone) => {
        console.log("username,password,email,telephone:",username,password,email,telephone)
        return mod.create({
            username,password,email,telephone
        })
    },
    update: (username,password,email,telephone,_id) => {
        return mod.updateOne({_id}, {
            username,password,email,telephone
        })
    },
    delete: (id) => {
        return mod.deleteOne({
            _id: id
        })
    },
    find:()=>{
        return mod.find({})
    }
}
module.exports = Services