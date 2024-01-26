require('dotenv').config()
const express = require('express')
const app = express()
// const port = 4000

app.get('/', (req, res) =>{
    res.send("Hello")
})

app.get('/chirag', (req, res)=>{
    res.send("Hello my name is chirag")
})

app.get('/login', (req, res)=>{
    res.send("<h1>Please login to my website</h1>")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port http://localhost:${process.env.PORT}`)
})