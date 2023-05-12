const product = require('../models/product')
const Products = require('../models/product')
const getALlProductsStatic = async (req, res) => {
    // throw new Error('testing async errors')
    const product = await Products.find({
        featured: true
    })
    res.status(200).json({ product ,
        nbHits: product.length})
}
const getALlProducts = async (req, res) => {
    res.status(200).json({ message: "product  route", product: Products })
}

module.exports = {
    getALlProducts, getALlProductsStatic
}