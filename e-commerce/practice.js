const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
//connect mongoose
// mongoose.connect(process.env.TEST)

//define a schema

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: 'provide name'
    },
    email:{
        type:String,
        required:'provide email',
        match: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/ ,
        // unique: true,
        // index:true

    },
    techStack:{
        name:String,
        salary:String
    },
    password:{
        type:String,
        required:'provide password',
        maxLength:8
    }
})

//define model

const myUserModel = mongoose.model("USERS",userSchema)

//create document
const doc = new myUserModel({
    name:"sharko",
    email:"shaarkoo@gmail.com",
    techStack:{
        name:"MERN",
        salary:"$100k"
    },
    password: '12345678'

})

doc.save()
.then(()=>{
    console.log('document saved')
})
.catch((error)=>{
    console.log("error occured",error)
})

// myUserModel.deleteMany()
// .then(()=>{console.log('deleted all')})
// .catch((err)=>{console.log(err)})

// myUserModel.findOne({name:'barko'})
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})

// myUserModel.deleteOne({name:'sharko'})
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})
// myUserModel.deleteOne({'techStack.name':'MERN'})
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})

app.get('/', async(req,res)=>{
    const user = await myUserModel.find()
    res.status(200).json({
        user,
        nbHits: user.length
    })
})


const start = async()=>{
    try {
        await mongoose.connect(process.env.TEST)
        console.log('database connected')
        app.listen(3000,()=>{
            console.log("server started at 3000")
        })
    } catch (error) {
        console.log(error)
    }
}

start()