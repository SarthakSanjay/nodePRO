const mongoose = require('mongoose')

//we can also create a another schema inside a schema

const adderessSchema = new mongoose.Schema({
   street:{ type:String,
    default:"Wall St"}
})


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        default:20
    },
    sex:{
        type:String,
        default:"Male"
    },
    hobbies:{
        type:[String],
        default:['playing','watching anime','eating','sleeping','coding']
    },
    createdAt:{
        type: Date,
        default:Date.now()
    },
    adderess: adderessSchema
})

module.exports = new mongoose.model('Users', userSchema)