const express = require('express')
const router = express.Router()
const {getAllProducts,getProduct ,deleteProduct} = require('../controllers/product')

router.route('/').get(getAllProducts)
router.route('/product').get(getProduct).post(getProduct).delete(deleteProduct)
module.exports = router



