const mongoose = require('mongoose')
const connectDB = require('./db')
const dotenv = require('dotenv').config()

const User = require('./models/UserModel')
const Product = require('./models/ProductModel')

const users = require('./data/users')
const products = require('./data/products')

connectDB()
const importData = async () => {
	try {
		await User.deleteMany()
		await Product.deleteMany()
		const createdUsers = await User.insertMany(users)
		const adminId = createdUsers[0]._id
		const productstoInsert = products.map((product) => ({
			...product,
			user: adminId,
		}))
		await Product.insertMany(productstoInsert)
		console.log('Data Imported')
		process.exit()
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}
const destroyData = async () => {
	try {
		await User.deleteMany()
		await Product.deleteMany()
		console.log('Data Destroyed')
		process.exit()
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

if (process.argv[2] === '-d') destroyData()
else importData()
