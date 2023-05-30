require("dotenv")
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const start = () =>{
    try {
        app.listen(port,()=>{
            console.log("server this 3000")
        })  
    } catch (error) {
        console.log(error)
    }
}
start()