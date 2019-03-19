const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/e-commerce', {useNewUrlParser: true})

const Schema = mongoose.Schema

let productSchema = new Schema({
    name: String,
    price: Number,
    detail: String
})

let Product = mongoose.model('products', productSchema)

module.exports = Product