const router = require('express').Router()
const images = require('../helpers/images')
const multer = require('multer')
const AdminController = require('../controllers/admincontroller')
const ProductController = require('../controllers/productcontroller')

// Router Admin 
router.post('/signup', AdminController.signup)

router.post('/signin', AdminController.signin)

// router.post('/products', ProductController.create)

router.post('/products',images.multer.single('imageUrl'),
images.sendUploadToGCS, ProductController.create)

router.get('/products', ProductController.findAll)

router.put('/products/:id', ProductController.update)

router.delete('/products/:id', ProductController.delete)

module.exports = router