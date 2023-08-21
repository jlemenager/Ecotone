const db = require('./db')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

db.on('error', console.error.bind(console, 'MongoDB not connecting'))

const PORT = process.env.DATABASE_URL || 3001

app.listen(PORT, ()=>console.log(`Server running on Port ${PORT}`))

const appRouter = require('./routes/appRouter')
app.use('/api', appRouter)