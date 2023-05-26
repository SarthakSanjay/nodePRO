const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        maxLength:150,
        required:true
    },
    author:{
        type:String,
        required:true,
        uppercase:true
    },
    date_posted:{
        type:Date,
        default: Date.now()
    }
})

module.exports = new mongoose.model("Blog", blogSchema)
