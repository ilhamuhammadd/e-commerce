const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/register', UserController.register)

router.post('/login', UserController.login)

router.get('/getAll', UserController.getAll)

router.get('/getCart', UserController.getCart)

router.put('/update', UserController.update)


module.exports = router