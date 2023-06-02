require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 3000
const USERS = require("./models/user")

const registerUser = require('./routes/register')
app.use('/register' , registerUser)

const loginUser = require('./routes/login')
app.use('/login',loginUser)

app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')


app.get('/users',async(req,res)=>{
   const data = await USERS.find({})
    res.status(200).json({data: data , dataLength: data.length})
})
 
const start = async() =>{
    try {
       await mongoose.connect(process.env.PL)
       console.log("connected to db")

       app.listen(port,()=>{
        console.log("server this 3000")
    }) 
    } catch (error) {
        console.log(error)
    }
}
start()