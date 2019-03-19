const express = require('express')
const app = express()
const routerUser = require('./routes/user')
const routerProduct = require('./routes/product')
const port = 3000
const cors = require('cors')

// Setting Body Parse
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Setting Routes
app.use('/user', routerUser )
app.use('/product', routerProduct)

module.exports = app

app.listen(port, ()=> console.log('run forest run', port))