require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || 'development'

const mongoose = require('mongoose')
const URLMONGO = "mongodb+srv://stephenlie55:Fairytail_007@cluster0-cga4i.mongodb.net/test?retryWrites=true&w=majority"

const index = require('./router/index.js')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/', index)

app.listen(port, ()=> {
    console.log(`Server running on port: ${port}`)
    mongoose.connect(URLMONGO, {useNewUrlParser: true})
    .then(()=>{
        console.log('Connected to db: ', URLMONGO)
    })
    .catch((err)=>{
        console.log(err)
    })
})