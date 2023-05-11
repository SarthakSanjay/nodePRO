require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000
const connectDB = require('./db/connect')
const productsRouter = require('./routes/product')
//errors
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handlers')
const router = require('./routes/product')

// middleware

app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send('<h1>store api</h1><a href="/api/v1/products">product route</a>')
})
//base router
app.use('/api/v1/products',router)

// product route

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start =  async() =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log("server started"))
    }catch(error){
        console.log(error)
    }
}

start()




 