const db = require('./db')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB not connecting'))

const PORT = 3001

app.listen(PORT, ()=>console.log(`Server running on Port ${PORT}`))

const appRouter = require('./routes/appRouter')
app.use('/api', appRouter)