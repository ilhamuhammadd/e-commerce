const bcrypt = require('bcrypt')

const comparesync = (password, hashpassword)=>{
    return bcrypt.compareSync(password, hashpassword)
}

module.exports = comparesync