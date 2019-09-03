const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000

mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', () => {
    console.log('mongodb error!')
})

db.once('open', () => {
    console.log('mongodb connected!')
})

const Todo = require('./models/todo')

app.get('/', (req, res) => {
    console.log('Hello World')
})

app.listen(port, () => {
    console.log('app is running')
})