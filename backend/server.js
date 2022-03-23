const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./db')

const PORT = process.env.PORT
connectDB()
const app = express()

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
