const { Schema } = require('mongoose')

const Category = new Schema(
    {
        name: {type:String, required:true},
        numOfProducts: {type:Number, required:true},
        numOfBrands: {type:Number, required:true}
    },
    {timestamps:true}
)

module.exports = Category