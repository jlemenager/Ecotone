const { Schema } = require('mongoose')

const Category = new Schema(
    {
        name: {type:String, required:true},
        numOfProducts: {type:Number, required:false},
        numOfBrands: {type:Number, required:false}
    },
    {timestamps:true}
)

module.exports = Category