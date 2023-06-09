const { Schema } = require('mongoose')

const Product = new Schema(
    {
        name: {type:String, required:true},
        category: {type:String, required:true},
        brand: {type:Schema.Types.ObjectId, required:true},
        color: {type:String, required:true},
        size: {type:String, required:true},
        stock: {type:Number, required:true}
    },
    {timestamps:true}
)

module.exports = Product