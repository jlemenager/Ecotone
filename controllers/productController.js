const { Product } = require('../models')

const getAllProducts = async(req,res) => {
    try{
        const products = await Product.find().populate('category').populate('brand')
        return res.status(200).json({ products })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const getProduct = async(req,res) => {
    try{
        const { id } = req.params
        const product = await Product.findById(id)
        if(product){
            return res.status(200).json({ product })
        } else {
            return res.status(400).send('Product doesnt exist')
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllProducts,
    getProduct
}