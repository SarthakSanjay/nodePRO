const express = require('express')
const router = express.Router()
const {getAllProducts,getProduct} = require('../controllers/product')

router.route('/').get(getAllProducts)
router.route('/product').get(getProduct).post(getProduct)
module.exports = router



