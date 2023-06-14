const { Schema } = require('mongoose')

const User = new Schema(
    {
        username: {type:String, required:true},
        loggedIn: {type:Boolean, required:true},
        email: {type:String, required:false}
    },
    {timestamps:true}
)

module.exports = User