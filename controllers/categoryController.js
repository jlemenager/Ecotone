const { Category } = require('../models')

const getAllCategories = async(req,res) => {
    try {
        const categories = await Category.find()
        return res.status(200).json({ categories })
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getCategory = async(req,res) => {
    try {
        const { id } = req.params
        const category = await Category.findById(id)
        if (category){
            return res.status(200).json({ category })
        } else {
            return res.status(400).send('Category not found')
        }
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllCategories,
    getCategory
}