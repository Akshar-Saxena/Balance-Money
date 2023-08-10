const express = require('express')
const path = require('path')

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

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000')
})