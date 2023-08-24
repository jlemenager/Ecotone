const { DATABASE_URL } = require("../config");
const mongoose = require('mongoose')

mongoose
.connect(DATABASE_URL)
.then(()=>console.log('MongoDB is running'))
.catch((e)=>console.error('Connection error to MongoDB', e.message))

const db = mongoose.connection

module.exports = db