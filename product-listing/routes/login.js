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
  const user =  await USERS.findOne({ name,email})
    // .then(()=>{
    //     console.log("success logged in")
    // }).catch((e)=>{
    //     console.log("cannot log in due to ", e)
    // })
    if(!user){
        return res.status(404).send("user not found")
    }
    if(!name){
        return res.status(404).send("please provide name")
    }
    if(!email){
        return res.status(404).send("please provide email")
    }
    res.status(200).send("logged in successfully <a href='/register'>go back</a>")

})

module.exports = router