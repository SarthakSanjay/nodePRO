const product = require('../models/product')
const Products = require('../models/product')
const getALlProductsStatic = async (req, res) => {
    // throw new Error('testing async errors')
    const product = await Products.find({})
    res.status(200).json({
        product,
        nbHits: product.length
    })
}
const getALlProducts = async (req, res) => {
    const { featured, company, name, sort, fields, numericFilters } = req.query
    const queryObject = {}
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }
    if(numericFilters){
        const operatorMap = {
            '>':'$gt',
            '>=':'$gte',
            '=':'$e',
            '<':'$lt',
            '<=':'$lte',
        }
        const regEx = /\b(<|>|<=|>=|=)\b/g
        let filters = numericFilters.replace(
            regEx,
            (match) =>`-${operatorMap[match]}-`
        )
        const options = ['price','rating']
        filters = filters.split(',').forEach((item)=>{
            const [field,operator,value] = item.split('-')
            if(options.includes(field)){
                queryObject[field] = {
                    [operator]:Number(value)
                }
            }
        });
        // console.log(filters)
    }
    console.log(queryObject)
    let result = Products.find(queryObject)
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }

    if (fields) {
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit
    result = result.skip(skip).limit(limit)

    const product = await result
    res.status(200).json({ product, nbHits: product.length })
}

module.exports = {
    getALlProducts, getALlProductsStatic
}