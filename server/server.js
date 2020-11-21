
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

const path = require('path')

app.use(express.static(path.join(__dirname, '../build')))
app.use(express.static(path.join(__dirname, '../static')))

app.get('/advertisement', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../static/resume_page.html'))
})
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../build/index.html'))
})
app.get('*', (req, res) => {
    return res.redirect('/')
})

app.listen(PORT, () => console.log(`(server): listening on port ${PORT}...`))
