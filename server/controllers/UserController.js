const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class UserController {

    static register(req, res) {
        User.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(user => {
                // console.log(user)
                res.status(201).json(user)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static login(req, res) {
        User.findOne({
            email: req.body.email
        })
            .then(user => {
                const isMatch = bcrypt.compareSync(req.body.password, user.password)
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

    static getAll(req, res) {
        User.find({})
            .then(users => {
                res.status(200).json(users)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getCart(req, res) {
        const isValid = jwt.verify(req.headers.token, process.env.SECRET_KEY)

        if (isValid) {
            User.findOne({
                email: isValid.email
            })
            .populate('productId')
            .then(user=>{
                res.status(200).json(user)
            })
            .catch(err=>{
                res.status(500).json(err)
            })
        } else {
            res.status(500).json({
                msg: 'Invalid Token'
            })
        }


    }

    static update(req, res) {

        // console.log(req.headers.token)
        const isValid = jwt.verify(req.headers.token, process.env.SECRET_KEY)
        // console.log(isValid)
        if (isValid) {
            User.update({
                email: isValid.email
            }, {
                    $push: {
                        productId: req.body.productId
                    }
                })
                .then(response => {
                    res.status(200).json(response)
                })
                .catch(err => {
                    res.status(500).json(err)
                })
        } else {
            res.status(500).json({
                msg: 'Invalid Token'
            })
        }
    }

}

module.exports = UserController