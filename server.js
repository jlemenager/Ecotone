const db = require('./db')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const PORT = process.env.PORT || 3001
console.log(process.env.APIKEY)
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json

db.on('error', console.error.bind(console, 'MongoDB not connecting'))

app.listen(PORT, ()=>console.log(`Server running on Port ${PORT}`))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const appRouter = require('./routes/appRouter')
app.use('/api', appRouter)