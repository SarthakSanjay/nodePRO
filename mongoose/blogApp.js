const mongoose = require('mongoose')
require('dotenv').config()
const BLOG = require('./blog')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const createBlog = () => {
    rl.question('Enter the title: ', (title) => {
        rl.question('Enter the content: ', (content) => {
            rl.question('Enter the author: ', (author) => {
                BLOG.create({
                    title: title,
                    content: content,
                    author: author,

                }).then(() => console.log("blog published"))
                    .catch((error) => {
                        console.log(error)
                    })
                    .finally(() => {
                        rl.close()
                    })
            })
        })
    })

}

const seeAllBlogs = async () => {
    await BLOG.find({})
        .then((d) => console.log(d))
        .catch((error) => {
            console.log(error)
        })
}

const updateBlog = (id, title , author) =>{
    BLOG.updateOne({'_id':id},{title: title , author : author})
    .then(()=>{
        console.log("blog title updated")
    }).catch((e)=>console.log(e))
}
const deleteABlog = (id) =>{
    BLOG.deleteOne({'_id': id})
    .then(()=>console.log('blog deleted'))
    .catch((e)=>{console.log(e)})
}
const deleteAllBlog = () =>{
    BLOG.deleteMany().then(console.log('deleted all')).catch((e)=>console.log("error deleting ",e))
}
const totalDocs = async () => {
    await BLOG.countDocuments().then(count => console.log(count)).catch((e) => console.log(e))

}


const run = async () => {
    try {
        await mongoose.connect(process.env.BLOG)
            .then(console.log('connected to db'))
            // deleteAllBlog()
            createBlog()
            // updateBlog("64724e9bf0ddcd488e3e4ef8","one piece anime", "luffy chacha")
            // deleteABlog("64724e9bf0ddcd488e3e4ef8")
            seeAllBlogs()
            totalDocs()
            .catch((error) => {
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

