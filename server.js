const express = require('express')

const app = express()

app.get('/' , (req,res)=>{
    res.send("<h1>harsh</h1>")
})

app.get('/about', (req,res)=>{
    res.send("<h1>About</h1>")
})

app.listen(3000,()=>{
    console.log("server is running")
})