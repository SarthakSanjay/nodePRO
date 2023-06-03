const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:['provide name']
    },
    price:{
        type:Number,
        required:['provide price']
    },
    companyName:{
        type:String,
        enum:[
            "Apple",
            "Samsung",
            "Google",
            "Dell",
            "Microsoft",
            "Sony",
            "Bose",
            "Fitbit",
            "Amazon",
            "Jabra",
            "Logitech",
          ]
    },
    rating:{
        type:Number,
        default: 4.5
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
    

})

module.exports = mongoose.model('PROD-List', productSchema)