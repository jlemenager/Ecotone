const express = require('express')
const router = express.Router()

const CategoryRouter = require('./categoryRoute')
const BrandRouter = require('./brandRoute')
const ProductRouter = require('./productRoute')

router.get('/', (req,res)=> res.send('This is the main api page'))
router.use('/categories', CategoryRouter)
router.use('/brands', BrandRouter)
router.use('/products', ProductRouter)

module.exports = router