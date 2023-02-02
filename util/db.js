const mongoose = require('mongoose')
const mongoConnect = () =>{
    mongoose.connect('mongodb://localhost:27017',()=>{
        console.log("mongo connected successfully")
    })
}

module.exports = mongoConnect