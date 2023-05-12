require('dotenv')
//express
const express = require('express')
const app = express()
//db

const connectDB = require('./db/connect')


const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        console.log("connected")
        app.listen(3000,()=>console.log('listening on port 3000'))
    } catch (error) {
        console.log(error);
    }
}

start()