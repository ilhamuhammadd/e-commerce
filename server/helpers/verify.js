const jwt = require('jsonwebtoken')
require('dotenv').config()

const verify = (token)=>{
    if (!token) {
        return false
    }
    return jwt.verify(token, process.env.SECRET_KEY)
}

module.exports = verify