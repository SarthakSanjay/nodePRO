const express = require('express')
const router  = express.Router()
// const USERS = require('../models/user')
const {login, loginController } = require('../controllers/login')

router.use(express.urlencoded({extended:true}))
router.route('/').get(login).post(loginController)

module.exports = router