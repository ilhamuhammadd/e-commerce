const Product = require('../models/Product')

class ProductController {

    static findAll(req, res) {
        Product.find({})
        .then(products=>{
            res.status(200).json(products)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static findById(req, res) {
        Product
            .findById({_id: req.params.id})
            .then(product=>{
                res.status(200).json(product)
            })
            .catch(err=>{
                res.status(500).json(err)
            })
    }

    static findOne() {}

    static create(req, res) {
        Product.create({
            name: req.body.name,
            price: req.body.price,
            detail: req.body.detail
        })
        .then(product=>{
            res.status(201).json(product)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static update() {}

    static delete() {}

}

module.exports = ProductController