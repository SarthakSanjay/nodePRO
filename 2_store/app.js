require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handlers')

// middleware

app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send('<h1>store api</h1><a href="/api/v1/products">product route</a>')
})
// product route

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start =  async() =>{
    try{
        app.listen(port , console.log("server started"))
    }catch(error){
        console.log(error)
    }
}

start()




 