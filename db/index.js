const mongoose = require('mongoose')

mongoose
.connect(`mongodb://127.0.0.1:27017/ecotoneDatabase`)
.then(()=>console.log('MongoDB is running'))
.catch((e)=>console.error('Connection error to MongoDB', e.message))

const db = mongoose.connection

module.exports = db