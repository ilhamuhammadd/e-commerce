const Admin = require('../model/admin')
const Product = require('../model/product')
const verify = require('../helpers/verify')
const images = require('../helpers/images')
const multer = require('multer')


class ProductController {

    static findAll(req, res) {
        const isMatch = verify(req.headers.token)
        if (isMatch) {
            Product
                .find({})
                .then(products=>{
                    res.status(200).json(products)
                })
                .catch(err=>{
                    res.status(500).json(err)
                })
        } else {
            res.status(401).json({
                message: 'Invalid Token!'
            })
        }
    }

    static findOne(req, res) {
        Product.findOne({
            _id: req.params.id
        })
        .then(product=>{
            res.status(200).json(product)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static create(req, res) {
        console.log(req.file)
        console.log(req.body)
        
        const {body} = req
        // console.log(req.headers.token)
        const isMatch = verify(req.headers.token)
        // console.log(isMatch)
        if (isMatch) {
            let obj = {
                name: body.name,
                imageUrl: req.file.cloudStoragePublicUrl,
                price: body.price,
                stock: body.stock
            }
    
            Product
                .create(obj)
                .then(product=>{
                    res.status(201).json(product)
                })
                .catch(err=>{
                    res.status(500).json(err)
                })
        } else {
            res.status(401).json({
                message: 'Invalid Token!'
            })
        }
    }

    static update(req, res) {
        const {body, params} = req
        let obj = {
            name: body.name,
            price: body.price,
            stock: body.stock
        }

        Product.updateOne({_id: params.id}, {$set: obj})
            .then(status=>{
                console.log(status)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    static delete(req, res) {
        const { params } = req
        const isMatch = verify(req.headers.token)
        if (isMatch) {
            Product.deleteOne({
                _id: params.id
            })
            .then(data=>{
                res.status(200).json(data)
            })
            .catch(err=>{
                res.status(500).json(err)
            })

        } else {
            res.status(401).json({
                message: 'Invalid Token!'
            })
        }
    }

}

module.exports = ProductController