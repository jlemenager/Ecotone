const express = require('express')
const router = express.Router()
const controller = require('../controllers/brandController')

router.get('/', controller.getAllBrands)
router.get('/:id', controller.getBrand)

module.exports = router