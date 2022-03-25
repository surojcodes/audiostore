import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>AUDIO SHOP</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='#home'>Cart</Nav.Link>
							<Nav.Link href='#link'>Sign In</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
