const express = require('express')
const router  = express.Router()
const USERS = require('../models/user')

router.use(express.urlencoded({extended:true}))
router.get('/',(req,res)=>{
    res.render('login')
})
router.post('/', async(req,res)=>{
    console.log(req.body)
    const {name , email} = req.body
    await USERS.create({
        name: name,
        email:email
    }).then(()=>{
        console.log("detailed inserted")
    }).catch((e)=>{
        console.log("cannot push details due to ", e)
    })
    if(!name){
        return res.status(404).send("please provide name")
    }
    if(!email){
        return res.status(404).send("please provide email")
    }
    res.status(200).send("user created <a href='/register'>go back</a>")

})

module.exports = router