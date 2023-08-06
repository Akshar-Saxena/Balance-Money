const express = require('express')
const path = require('path')
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test')
//     .then(() => {
//         console.log('success')
//     })
//     .catch(() => {
//         console.log('error')
//     })

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'layouts/index.html'))
})

app.get('/account', (req, res) => {
    res.sendFile(path.join(__dirname, 'layouts/account.html'))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'layouts/signup.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'layouts/login.html'))
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})