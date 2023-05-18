const mongoose = require('mongoose')
require('dotenv').config()
const productJson =  require('./item.json')
const Items = require('./model/item')
const connectDB = require('./db/connect')

const start = async() =>{
    try {
        await connectDB(process.env.URL)
        console.log("connected")
        await Items.deleteMany()
        console.log('if there is any items in the collect it will be deleted')
        await Items.create(productJson)
        console.log("items pushed in db")
        console.log('success')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()