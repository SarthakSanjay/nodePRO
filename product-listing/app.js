require("dotenv")
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.get('/login',(req,res)=>{
    res.render('login')
})
app.post('/login',(req,res)=>{
    console.log(req.body)
})
app.listen(port,()=>{
    console.log("server this 3000")
})  
// const start = () =>{
//     try {
       
//     } catch (error) {
//         console.log(error)
//     }
// }
// start()