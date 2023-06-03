const express = require('express')
const router  = express.Router()
// const USERS = require('../models/user')
const {register, registerController } = require('../controllers/register')

router.use(express.urlencoded({extended:true}))
router.route('/').get(register).post(registerController)

module.exports = router