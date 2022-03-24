const Product = require('../models/ProductModel')

const getProducts = async (req, res) => {
	try {
		const products = await Product.find()
		res.status(200).json({ success: true, products })
	} catch (error) {
		res.status(500).json({ succes: false, message: error.message })
	}
}
module.exports = {
	getProducts,
}
