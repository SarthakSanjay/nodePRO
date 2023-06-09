const express = require('express')
const app = express()
const port = process.env.PORT ||  3000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
 
//middleware
app.use(express.json())
app.use(express.static('./public'))
app.use('/api/v1/tasks' , tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
//app.get('/api/v1/tasks') - get all the tasks
//app.post('/api/v1/tasks') - create new tasks
//app.get('/api/v1/tasks/:id') - get single task
//app.patch('/api/v1/tasks/:id') - update task
//app.delete('/api/v1/tasks/:id') - delete task
const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log("server started"))

    }catch(error){
        console.log(error)
    }
}

start()
