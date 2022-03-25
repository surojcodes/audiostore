const Product = require('../models/ProductModel')

//get all products
const getProducts = async (req, res) => {
	try {
		const products = await Product.find()
		res.status(200).json({ success: true, products })
	} catch (error) {
		res.status(500).json({ success: false, message: error.message })
	}
}
// get single product
const getProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		if (!product) {
			res.status(404).json({ success: false, message: 'Product not found' })
		} else {
			res.status(200).json({ success: true, product })
		}
	} catch (error) {
		res.status(400).json({ success: false, message: error.message })
	}
}

module.exports = {
	getProducts,
	getProduct,
}
