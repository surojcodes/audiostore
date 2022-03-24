const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./db')
const cors = require('cors')

const PORT = process.env.PORT
connectDB()
const app = express()
app.use(cors())
app.use('/api/products', require('./routes/productRoutes'))

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
