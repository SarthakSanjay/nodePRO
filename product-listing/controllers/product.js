const PRODUCT = require('../models/product')
const createProduct = async(req,res)=>{
    const products = await PRODUCT.create({
      "productName": "AUDI R8",
      "price": 20000000,
      "companyName": "Sony",
      "rating": 4.9,
    })
    res.status(200).json({success:true,total:products.length,products:products})
}
const getAllProducts = async(req,res)=>{
    const products = await PRODUCT.find({})
    res.status(200).json({total:products.length,products:products})
}

const getProduct = async (req,res) =>{
    // const name = req.body.name
    const {name} = req.query
    console.log(req.query)
    const product = await PRODUCT.findOne({productName:String(name)})
    console.log(name)
    console.log(product)
    if(!product){
     return res.status(404).send("Not found")
    }
    res.status(200).json({ product:product})
}

const deleteProduct = async (req,res) =>{
    // const name = req.body.name
    const {name} = req.query
    console.log(req.query)
    const product = await PRODUCT.deleteOne({productName:String(name)})
    console.log(name)
    console.log(product)
    if(!product){
     return res.status(404).send("Not found")
    }
    res.status(200).json({ product:product})
}

// const updateProduct = async (req,res) =>{
//     // const name = req.body.name
//     const {name} = req.query
//     console.log(req.query)
//     const product = await PRODUCT.updateOne({productName:String(name)})
//     console.log(name)
//     console.log(product)
//     if(!product){
//      return res.status(404).send("Not found")
//     }
//     res.status(200).json({ product:product})
// }
module.exports = {getAllProducts , getProduct , deleteProduct, createProduct}