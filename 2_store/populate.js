require('dotenv').config()
const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProduct = require('./product.json')

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProduct)
        console.log("success")
        process.exit(0)
    }catch(error){
        console.log(error)
    }
}
start()