const express = require('express')
const app = express()
const cors = require('cors')
const routeradmin = require('./router/admin')
const routeruser = require('./router/user')
const port = 3000

// Setting Cors
app.use(cors())

// Setting Using Json
app.use(express.json())

// Setting Body Parser
app.use(express.urlencoded({extended: false}))


// Setting Routes
app.use('/admin', routeradmin )

app.use('/user', routeruser)

// Listen port
module.exports = app

app.listen(port, ()=> console.log('run forest run', port))