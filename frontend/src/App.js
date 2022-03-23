import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
	return (
		<Router>
			<Header />
			<main className='py-4'>
				<Container>
					<Routes>
						<Route path='/' element={<HomePage />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
