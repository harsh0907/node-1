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
    const name =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const age = Math.floor((Math.random() * 100) + 1)


    new user({name:name,age:age})
    .save().then((res) => res.send(res))
    .catch(console.log)
   
})

app.get('/about', (req,res)=>{
    user.find({})
    .then((res) =>res.send(res))
    .catch(console.log)
})

app.listen(8080,()=>{
    console.log("server is running")
})