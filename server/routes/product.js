const router = require('express').Router()
const ProductController = require('../controllers/ProductController')

router.get('/', ProductController.findAll)

router.get('/:id', ProductController.findById)

router.post('/create', ProductController.create)


module.exports = router