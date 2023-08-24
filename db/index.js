const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://jlemenager:Jlhl1996@cluster0.flwiryj.mongodb.net/ecotoneDatabase?retryWrites=true&w=majority')
.then(()=>console.log('MongoDB is running'))
.catch((e)=>console.error('Connection error to MongoDB', e.message))

const db = mongoose.connection

module.exports = db