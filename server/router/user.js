const router = require('express').Router()
const UserController = require('../controllers/usercontroller')

router.post('/signup', UserController.signup)

router.post('/signin', UserController.signin)

router.get('/products', UserController.getProducts)

router.put('/products', UserController.buyProduct)

router.get('/products/cart', UserController.getCart)

router.patch('/products/cart', UserController.deleteCart)


module.exports = router