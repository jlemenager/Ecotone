const express = require('express')
const router = express.Router()

const CategoryRouter = require('./categoryRoute')
const BrandRouter = require('./brandRoute')
const ProductRouter = require('./productRoute')
const UserRouter = require('./userRoute')

router.get('/', (req,res)=> res.send('This is the main api page'))
router.use('/categories', CategoryRouter)
router.use('/brands', BrandRouter)
router.use('/products', ProductRouter)
router.use('/users', UserRouter)

module.exports = router