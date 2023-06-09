const express = require('express')
const router = express.Router()
const {getALlProducts,getALlProductsStatic} = require('../controllers/product')

router.route('/').get(getALlProducts)
router.route('/static').get(getALlProductsStatic)

module.exports = router