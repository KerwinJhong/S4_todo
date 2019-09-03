const express = require('express')
const app = express()
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', () => {
    console.log('mongodb error!')
})

db.once('open', () => {
    console.log('mongodb connected!')
})

const Todo = require('./models/todo')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/todos', (req, res) => {
    res.send('列出所有 Todo')
})

app.get('/todos/new', (req, res) => {
    res.send('新增 Todo 頁面')
})

app.get('/todos/:id', (req, res) => {
    res.send('顯示 Todo 的詳細內容')
})

app.post('/todos', (req, res) => {
    res.send('建立 Todo')
})

app.get('/todos/:id/edit', (req, res) => {
    res.send('修改 Todo 頁面')
})

app.post('/todos/:id/edit', (req, res) => {
    res.send('修改 Todo')
})

app.post('/todos/:id/delete', (req, res) => {
    res.send('刪除 Todo')
})

app.listen(port, () => {
    console.log('app is running')
})