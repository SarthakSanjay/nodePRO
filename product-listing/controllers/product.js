const PRODUCT = require('../models/product')
const getAllProducts = async(req,res)=>{
    const products = await PRODUCT.find({})
    res.status(200).json({total:products.length,products:products})
}

module.exports = getAllProducts