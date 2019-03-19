const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost/e-commerce', {useNewUrlParser: true})

const Schema = mongoose.Schema

let userSchema = new Schema({
    email: String,
    password: String,
    productId: [{
        type: Schema.Types.ObjectId, ref: 'products'
    }]
})

userSchema.pre('save', function(next){
    const salt = bcrypt.genSaltSync(5)
    const hash = bcrypt.hashSync(this.password, salt)
    this.password = hash
    next()
})

let User = mongoose.model('users', userSchema)

module.exports = User