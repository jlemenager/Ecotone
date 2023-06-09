const mongoose = require('mongoose')

const CategorySchema = require('./category.js')
const BrandSchema = require('./brand.js')
const ProductSchema = require('./product.js')
const UserSchema = require('./user.js')

const Category = mongoose.model('Category', CategorySchema)
const Brand = mongoose.model('Brand', BrandSchema)
const Product = mongoose.model('Product', ProductSchema)
const User = mongoose.model('User', UserSchema)

module.exports = {
    Category,
    Brand,
    Product,
    User
}