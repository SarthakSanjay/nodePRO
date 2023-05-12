require('dotenv').config()
const connectDB = require('./db/connect')
const Products = require('./models/product')

const jsonProduct = require('./product.json')

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        console.log("connected")
        await Products.deleteMany()
        console.log("deleted")
        await Products.create(jsonProduct)
        console.log("success")
        process.exit(0)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
start()