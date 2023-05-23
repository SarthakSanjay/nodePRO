const items = require('../model/item')
const path = require('path')

const getItems = async(req,res)=>{

    const product = await items.find({})
    res.status(200).json({
        product,
        nbHits: product.length
    })
}

const login = (req,res) =>{
    res.status(200).sendFile(__dirname + "/public/login.html")
}
module.exports = {getItems , login}