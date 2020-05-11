const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const config = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(require('./routes'))

app.listen(config.port, () => {
    console.log(`server on port ${config.port}`)
})