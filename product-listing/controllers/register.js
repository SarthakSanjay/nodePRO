const USERS = require('../models/user')

const registerController = async(req,res)=>{
    console.log(req.body)
    const {name , email} = req.body
  await USERS.create({ name:name,email:email})
    .then(()=>{
        console.log("user created")
    }).catch((e)=>{
        console.log("something went wrong ", e)
    })
   
    if(!name){
        return res.status(404).send("please provide name")
    }
    if(!email){
        return res.status(404).send("please provide email")
    }
    res.status(200).send("created user successfully <a href='/register'>go back</a>")

}
const register = (req,res)=>{
    res.render('register')
}

module.exports = {register, registerController}