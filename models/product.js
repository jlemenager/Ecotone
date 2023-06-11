const { Schema } = require('mongoose')

const Product = new Schema(
    {
        name: {type:String, required:true},
        category: {type:Schema.Types.ObjectId, required:true},
        brand: {type:Schema.Types.ObjectId, required:true},
        price: {type:Number, required:true},
        color: {type:String, required:true},
        size: {type:String, required:true},
        inStock: {type:Boolean, required:false},
        description: {type:String, required:true},
        mainImage: {type:String, required:true},
        image2: {type:String, required:false},
        image3: {type:String, required:false}
    },
    {timestamps:true}
)

module.exports = Product