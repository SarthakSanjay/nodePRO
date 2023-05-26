const mongoose = require('mongoose')

//we can also create a another schema inside a schema

const adderessSchema = new mongoose.Schema({
   street:{ type:String,
    default:"Wall St"}
})


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:20
    },
    age:{
        type:Number,
        default:20,
        min:1
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
    adderess: adderessSchema ,
    bestfreind:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Users'
    }
})

module.exports = new mongoose.model('Users', userSchema)