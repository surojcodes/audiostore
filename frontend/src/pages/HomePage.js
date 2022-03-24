import { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomePage = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		fetchProducts()
	}, [])
	const fetchProducts = async () => {
		const { data } = await axios.get('http://localhost:5000/api/products')
		setProducts(data.products)
	}

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col sm={12} md={6} lg={4} xl={3} key={product._id}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default HomePage
