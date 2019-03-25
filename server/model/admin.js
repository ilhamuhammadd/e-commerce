const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost/db-ecommerce', {useNewUrlParser: true})

let Schema = mongoose.Schema

let adminSchema = new Schema({
    username: String,
    password: String
})

adminSchema.pre('save', function(next){
    let salt = bcrypt.genSaltSync(5)
    let hash = bcrypt.hashSync(this.password, salt)
    this.password = hash
    next()
})

let Admin = mongoose.model('admin', adminSchema)

module.exports = Admin