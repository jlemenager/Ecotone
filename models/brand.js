const { Schema } = require('mongoose')

const Brand = new Schema(
    {
        name: {type:String, required:true},
        category : {type:Schema.Types.ObjectId, ref:'Category'},
        description: {type:String, required:true},
        ethicallyMade: {type:Boolean, required:true},
        sustainablyMade: {type:Boolean, required:true},
        locationMade: {type:String, required:true},
        bCorp: {type:Number, required:true},
        ethicallyMade: {type:Number, required:true},
        vegan: {type:Number, required:true},
        percentOrganic: {type:Number, required:true},
        percentCarbonNeutral: {type:Number, required:true},
        donateToCharities: {type:Number, required:true},
        recycledMaterialsUsed: {type:Number, required:true}
    },
    {timestamps:true}
)

module.exports = Brand