import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Image, Row, Col, ListGroup, Button, Card } from 'react-bootstrap'

const ProductPage = () => {
	const { id } = useParams()
	const [product, setProduct] = useState({})
	useEffect(() => {
		fetchProduct()
	}, [])

	const fetchProduct = async () => {
		const { data } = await axios.get(`http://localhost:5000/api/products/${id}`)
		setProduct(data.product)
	}
	return (
		<>
			<Row>
				<Col md={5}>
					<Image src={product.image} alt={product.name} fluid></Image>
				</Col>
				<Col md={4}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>Price: NRP. {product.price}</ListGroup.Item>
						<ListGroup.Item>Description: {product.description}</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>Price: NRP {product.price}</ListGroup.Item>
							<ListGroup.Item>
								Status: {product.countInStock} in stock
							</ListGroup.Item>
							<ListGroup.Item className='d-grid gap-2'>
								<Button variant='primary' disabled={product.countInStock === 0}>
									Add To Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default ProductPage
