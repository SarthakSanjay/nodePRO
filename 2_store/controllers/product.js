const product = require('../models/product')
const Products = require('../models/product')
const getALlProductsStatic = async (req, res) => {
    // throw new Error('testing async errors')
    const product = await Products.find({})
    res.status(200).json({ product ,
        nbHits: product.length})
}
const getALlProducts = async (req, res) => {
    const {featured , company ,name,sort} = req.query
    const queryObject = {}
    if(featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.name = {$regex:name,$options:'i'}
    }
    console.log(queryObject)
    let result =  Products.find(queryObject)
    if(sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }else{
        result = result.sort('createdAt')
    }
    let product = await result
    res.status(200).json({ product , nbHits: product.length})
}

module.exports = {
    getALlProducts, getALlProductsStatic
}