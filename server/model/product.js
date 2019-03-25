const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db-ecommerce', {useNewUrlParser: true})

let Schema = mongoose.Schema

let productSchema = new Schema({
    name: String,
    imageUrl: String,
    price: Number,
    stock: Number
})

let Product = mongoose.model('products', productSchema)

module.exports = Product