const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:{
        type:String , 
        required: true
    },
    relatedProduct:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Pro'
    }
})

module.exports = new mongoose.model('Pro', productSchema)