const mongoose = require('mongoose')
const Products = require('./models/product')
const connectDB = require('./db/connect')
const product = require('./product.json')
const start = async() =>{
   try {
    await connectDB(process.env.MONGO_URI)
    console.log('database connected')
    await Products.deleteMany()
    console.log("db cleared")
    await Products.create(product)
    console.log('product inserted success')
   } catch (error) {
    console.log(error)
   }
}

start()