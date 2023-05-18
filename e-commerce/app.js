require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
//connectDB
const connectDB = require('./db/connect')
// const items = require('./model/item')
const router = require('./router/item')
app.use(express.json())
app.use(router)

const start = async() =>{
    try {
        await connectDB(process.env.URL)
        console.log('database connected')
        app.listen(port , ()=>{
            console.log(`Server is listining on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()