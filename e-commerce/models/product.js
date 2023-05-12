const mongoose = require('mongoose')

const produchSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'provide name of the product']
    },
    price:{
        type:Number,
        required:[true,'provide price of the product']
    },
    company:{
        type:String,
        required:[true,'provide company of the product']
    },
    rating:{
        type:Number,
        default: 4.5
    }
})

module.exports =  mongoose.model('Products',produchSchema)

