const Admin = require('../model/admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


class AdminController {

    static signup(req,res) {
        const {body} = req
        let obj = {
            username: body.username,
            password: body.password
        }
        Admin
            .create(obj)
            .then(data=>{
                res.status(201).json({
                    message: 'Admin Created'
                })
            })
            .catch(err=>{
                res.status(500).json(err)
            })
    }

    static signin(req, res) {
        const {body} = req
        Admin.findOne({
            username: body.username
        })
        .then(response=>{
            if (response) {
                const isMatch = bcrypt.compareSync(body.password, response.password)
                if (isMatch) {
                    let payload = {
                        username: response.username
                    }

                    const token = jwt.sign(payload, process.env.SECRET_KEY)

                    res.status(200).json({
                        token
                    })
                } else {
                    res.status(401).json({
                        message: 'Invalid Username/Password!'
                    })
                }
            }
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }
}

module.exports = AdminController