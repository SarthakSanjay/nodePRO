require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 3000
const USERS = require("./models/user")
const PRODUCT = require('./models/product')
// const products = require('../e-commerce/item.json')

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine','ejs')

//register user route
const registerUser = require('./routes/register')
app.use('/register' , registerUser)
// login user route
const loginUser = require('./routes/login')
app.use('/login',loginUser)
// product route
const productRoutes = require('./routes/product')
app.use('/products',productRoutes)

app.get('/test',(req,res)=>{
    console.log(req)
})
app.get('/AllUsers',async(req,res)=>{
   const data = await USERS.find({})
    res.status(200).send(data)
})
app.get('/users',async(req,res)=>{
//    const data = await USERS.find({})
    // res.status(200).json({data: data , dataLength: data.length})
    res.status(200).render('user')
})
 

const start = async() =>{
    console.log("script started")
    try {
       await mongoose.connect(process.env.PRODUCTS)
       console.log("connected to db")
    //    await PRODUCT.deleteMany().then(()=>{
    //     console.log("deleted if any products")
    //    }).catch((e)=>console.log(e))
    //     await PRODUCT.create(products)
    //     .then(()=>{
    //         console.log("created products")
    //        }).catch((e)=>console.log(e))
       app.listen(port,()=>{
        console.log("server this 3000")
        
    }
    ) 
} catch (error) {
    console.log(error)
}
console.log('script ended')
}
start()