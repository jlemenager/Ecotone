const mongoose = require('mongoose')

mongoose
.connect(process.env.DATABASE_URL)
.then(()=>console.log('MongoDB is running'))
.catch((e)=>console.error('Connection error to MongoDB', e.message))

const db = mongoose.connection

module.exports = db