const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost/db-ecommerce', {useNewUrlParser: true})

let Schema = mongoose.Schema

let userSchema = new Schema({
    email: {
        type: String,
        validate: {
            validator(value) {
                return new Promise((resolve, reject)=> {
                    return User.findOne({
                        email: value,
                        _id: {
                            $ne: this._id
                        }
                    })
                    .then(response=>{
                        if (response) {
                            resolve(false)
                        } else {
                            resolve(true)
                        }
                    })
                    .catch(err=>{
                        resolve(false)
                    })
                })
            }, message: 'Email Already Taken!'
        }
    },
    password: {
        type: String
    },
    products: [{
        type: Schema.Types.ObjectId, ref: 'products'
    }]
})


userSchema.pre('save', function(next){
    let salt = bcrypt.genSaltSync(5)
    let hash = bcrypt.hashSync(this.password, salt)
    this.password = hash
    next()
})

let User = mongoose.model('users', userSchema)

module.exports = User