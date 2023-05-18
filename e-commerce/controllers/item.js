const items = require('../model/item')

const getItems = async(req,res)=>{

    const product = await items.find({})
    res.status(200).json({
        product,
        nbHits: product.length
    })
}

module.exports = getItems