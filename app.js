const express = require('express')
const app = express()

app.get('/',(r,rr)=>{
    rr.send("hello")
})


app.listen(3000,console.log("server started"))