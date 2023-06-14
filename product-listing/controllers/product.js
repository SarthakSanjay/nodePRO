const PRODUCT = require('../models/product')
const getAllProducts = async(req,res)=>{
    const products = await PRODUCT.find({})
    res.status(200).json({total:products.length,products:products})
}
const getProduct = async (req,res) =>{
    const name = req.body.name
    const product = await PRODUCT.findOne({productName:name})
    console.log(name)
    if(!name){
     return res.status(404).send("Not found")
    }
    res.status(200).json({ product:product})
}
module.exports = {getAllProducts , getProduct}