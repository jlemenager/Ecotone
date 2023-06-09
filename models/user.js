const { Schema } = require('mongoose')

const User = new Schema(
    {
        name: {type:String, required:true},
        location: {type:String, required:false},
        amountDonatedToTrees: {type:Number, required:true},
        amountDonatedToRF: {type:Number, required:true},
        amountDonatedToMC: {type:Number, required:true}
    },
    {timestamps:true}
)

module.exports = User