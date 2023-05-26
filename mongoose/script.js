const mongoose = require('mongoose')
require('dotenv').config()
const USER = require('./user')
const PD = require('./product')
// user.deleteMany().then(
//     ()=>{
//         console.log('deleted all')
//     }
// ).catch((e)=> console.log(e.message))



// const people = new user({
//     name:"sharko",
//     age:22,
//     sex:"Male",
//     hobbies:['playing','watching anime','eating','sleeping','coding'],
//     // createdAt:"",
//     // adderess:""
// })
// people.save().then(()=>console.log("people doc saved")).catch((e)=>console.log(e.message))
// console.log(people)
// we can use create method insted of save method
//create method is directly applied on the model
const start = async () => {
    try {
        await mongoose.connect(process.env.TEST)
        console.log('database connected')

        // await PD.create({
        //     name:"samsung"
        // }).then(()=>console.log('product inserted'))
        // .catch((err)=>console.log(err))

        // await PD.find({}).then((d)=>console.log(d)) .catch((err)=>console.log(err))
        // try {
        //     const pdata = await PD.where('name').equals('iphone')
        //     // pdata[0].relatedProduct = '6470c730e1787e3ee6cd324c'
        //     // pdata[0].save()
        //     .populate('relatedProduct')
        //     console.log(pdata)
        // } catch (error) {
        //     console.log(error)
        // }
        //delete all
        // await USER.deleteMany().then(()=>console.log('deleted all docs')).catch((err)=>console.log(err))

        // await USER.create({
        //     name:"ram",
        //     age:25,
        //     sex:"male",
        //     hobbies:['playing','watching tv','eating','sleeping','coding'],
        //     // createdAt:"",
        //     'adderess.street':"MG Bazar",
        //      bestfriend:"6470bbc2f419b81eee73f2cc"
        // })


        //we can directly pass document object inside create method without creating the instance of the model
        //   await  user.deleteMany().then(()=>console.log("deleted all")).catch((e)=>console.log(e.message))
        //    const data = await USER.find({
        //     name:"barko",
        //     'adderess.street':"MG Bazar"

        // })
        // const one = await USER.findOne({name:'marko'}) // returns the first doc that matches
        //    console.log(one,"this one")
        // await USER.find({}).then((data)=>{
        //     console.log(data)
        // }).catch((err)=>{
        //     console.log(err)
        // })
        // await USER.exists({name:'sharko'}).then((data)=>{
        //     console.log(data)
        // }).catch((err)=>{
        //     console.log(err)
        // })
        // in mongoDB syntax for the find method is little confusing , so in mongoose
        // so mongoose implemented somthing called queries

        //  const data =await USER.where('name')
        //     .equals('sharko')
            // .where('adderess.street')
            // .equals('MG Bazar')
            // .where('age')
            // .gt(5)
            // .lt(40)
            // .populate('bestfriend')
            // .limit(2) // gives only two docs
            // data[0].bestfriend = '6470bc1c14f6a18fc62ecf00'
            // data[0].save()
            // .select('age')
            // .then((data) => {
              
            //     console.log(data, 'output by using queries')
            // }).catch((err) => {
            //     console.log(err)
            // })


        //    await USER.findById('6470b15cce9074a2682c09a4')
        //    .then((findbyid)=>{
        //     console.log(findbyid,'founded by id')
        //    }).catch((e)=>console.lgo(e))

        //to update the existing doc
        //    await USER.updateOne({name:"marko" , name:"sharko"})
        //    .then((d)=>{
        //     console.log(d)
        //    }).catch((e)=>{
        //     console.log(e)
        //    })

        //to delete 
        // await USER.deleteOne({name:'ram'})
        await USER.countDocuments().then(count => console.log(count)).catch((e) => console.log(e))
        // app.listen(3000,()=>{
        //     console.log("server started at 3000")
        // })
    } catch (error) {
        console.log(error)
    }
}

start()