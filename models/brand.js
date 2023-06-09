const { Schema } = require('mongoose')

const Brand = new Schema(
    {
        name: {type:String, required:true},
        category : {type:Schema.Types.ObjectId, required:true},
        description: {type:String, required:true},
        ethicallyMade: {type:Boolean, required:true},
        sustainablyMade: {type:Boolean, required:true},
        locationMade: {type:String, required:true},
        bCorp: {type:Number, required:true},
        percentOrganic: {type:Number, required:true},
        percentCarbonNeutral: {type:Number, required:true},
        moneyDonatedToCharities: {type:Number, required:true},
        recycledMaterialsUsed: {type:Number, required:true}
    },
    {timestamps:true}
)

module.exports = Brand