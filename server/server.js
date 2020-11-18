
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

const path = require('path')

app.use(express.static(path.join(__dirname, '../build')))
app.use(express.static(path.join(__dirname, '../static')))

app.get('/', (req, res) => {
    return res.status(200).sendFile('index.html')
})
app.get('advertisement', (req, res) => {
    return res.status(200).sendFile('resume_page.html')
})

app.listen(PORT, () => console.log(`(server): listening on port ${PORT}...`))
