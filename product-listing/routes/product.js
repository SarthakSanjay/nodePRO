const express = require('express')
const router = express.Router()
const {getAllProducts,getProduct ,deleteProduct , createProduct} = require('../controllers/product')

router.route('/').get(getAllProducts)
router.route('/product').get(getProduct).post(getProduct).delete(deleteProduct)
router.route('/newProduct').get(createProduct)
module.exports = router



