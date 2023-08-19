const db = require('./db')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE'
}))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

db.on('error', console.error.bind(console, 'MongoDB not connecting'))

const PORT = 3001

app.listen(PORT, ()=>console.log(`Server running on Port ${PORT}`))

const appRouter = require('./routes/appRouter')
app.use('/api', appRouter)