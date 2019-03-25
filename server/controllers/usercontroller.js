const User = require('../model/user')
const Product = require('../model/product')
const compare = require('../helpers/comparesync')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const verify = require('../helpers/verify')


class UserController {

    static signup(req, res) {
        const { body } = req
        let obj = {
            email: body.email,
            password: body.password
        }
        User.create(obj)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static signin(req, res) {
        const { body } = req
        User.findOne({
            email: body.email
        })
            .then(user => {
                const isMatch = compare(body.password, user.password)
                if (isMatch) {
                    let payload = {
                        email: user.email
                    }

                    const token = jwt.sign(payload, process.env.SECRET_KEY)
                    res.status(200).json({
                        token
                    })
                }

            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getProducts(req, res) {
        const { headers } = req
        const isMatch = verify(headers.token)
        User.findOne({
            email: isMatch.email
        })
            .then(user => {
                if (user) {
                    return Product.find({})
                        .then(products => {
                            res.status(200).json(products)
                        })
                } else {
                    res.status(500).json({
                        message: 'Invalid Token!'
                    })
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static buyProduct(req, res) {
        console.log(req.body)
        const { body, headers } = req
        const isMatch = verify(headers.token)
        // console.log(isMatch)
        User.update({
            email: isMatch.email,
        }, {
                $push: {
                    products: body._id
                }
            })
            .then(user => {
                console.log(user)
                res.status(200).json(user)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getCart(req, res) {
        const { headers } = req
        const isMatch = verify(headers.token)
        if (isMatch) {
            User.findOne({
                email: isMatch.email
            })
                .populate('products')
                .then(cart => {
                    res.status(200).json(cart)
                })
                .catch(err => {
                    res.status(500).json(err)
                })

        } else {
            res.status(401).json('Invalid Token!')
        }
    }

    static payProduct() { }

    static deleteCart(req, res) {
        const {body, headers} = req
        const isMatch = verify(headers.token)
        if (isMatch) {
            User.update({
                email: isMatch.email
            }, {
                $pop: {
                    products: body.index
                }
            })
            .then(cart=>{
                res.status(200).json(cart)
            })
            .catch(err=>{
                res.status(500).json(err)
            })
        } else {
            res.status(401).json('Invalid Token!')
        }
    }

    static checkout() { }

}

module.exports = UserController