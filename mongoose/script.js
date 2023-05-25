const mongoose = require('mongoose')
require('dotenv').config()
const user = require('./user')

// user.deleteMany().then(
//     ()=>{
//         console.log('deleted all')
//     }
// ).catch((e)=> console.log(e.message))



const people = new user({
    name:"sharko",
    age:22,
    sex:"Male",
    hobbies:['playing','watching anime','eating','sleeping','coding'],
    // createdAt:"",
    // adderess:""
})
// people.save().then(()=>console.log("people doc saved")).catch((e)=>console.log(e.message))
// console.log(people)
// we can use create method insted of save method
const start = async()=>{
    try {
        await mongoose.connect(process.env.TEST)
        console.log('database connected')
        await user.create(people)
    //   await  user.deleteMany().then(()=>console.log("deleted all")).catch((e)=>console.log(e.message))
       const data = await user.find({})
       console.log(data)
    //    console.log(user.length)
        // app.listen(3000,()=>{
        //     console.log("server started at 3000")
        // })
    } catch (error) {
        console.log(error)
    }
}

start()