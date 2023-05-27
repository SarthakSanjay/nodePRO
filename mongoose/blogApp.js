const mongoose = require('mongoose')
require('dotenv').config()
const BLOG = require('./blog')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const createBlog = () =>{
 rl.question('Enter the title: ', (title) => {
            rl.question('Enter the content: ', (content) => {
              rl.question('Enter the author: ', (author) => {
                 BLOG.create({
                    title:title,
                    content:content,
                    author:author,
        
                }).then(()=>console.log("blog published"))
                .catch((error)=> {
                    console.log(error)
                })
                })
                })
                })
                
  }
  
  const seeAllBlogs = async() =>{
    await BLOG.find({})
    .then((d)=>console.log(d))
    .catch((error)=> {
        console.log(error)
    })
  }

  const totalDocs = async()=>{
    await BLOG.countDocuments().then(count => console.log(count)).catch((e) => console.log(e))
    
}
const run = async() => {
    try {
        await mongoose.connect(process.env.BLOG)
        .then(console.log('connected to db'))
        // .then(createBlog() ,console.log('inserted blog'))
        .then(seeAllBlogs(),totalDocs())
        .catch((error)=> {
            console.log(error)
        })
       

        // await BLOG.create({
        //     title:"Will AI replace jobs?",
        //     content:"Short answer yes , long answer not now but in future it may.",
        //     author:"sharko",

        // }).then(()=>console.log("blog published"))
        // .catch((error)=> {
        //     console.log(error)
        // })

        

    } catch (error) {
        console.log(error)
    }
}

run()