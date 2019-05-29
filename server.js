const express = require('express')
const mongooes = require('mongoose')

const app = express()


mongooes.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})



const user = mongooes.model('user',{
    name:{
        type:String
    },
    age:{
        type:Number
    }
})







app.get('/' , (req,res)=>{
    new user({name:"harsh",age:20})
    .save().then(console.log)
    .catch(console.log)
    res.send("<h1>harsh</h1>")
})

app.get('/about', (req,res)=>{
    user.find({})
    .then(console.log)
})

app.listen(8080,()=>{
    console.log("server is running")
})