import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import './style.css';

function Navigation() {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand >Navbar</Navbar.Brand>
					<Nav className="ms-auto">
						<Link to="/">
							<a className='list-item text-white'>Home</a>
						</Link>
						<Link to="/list">
							<a className='list-item text-white'>List</a>
						</Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
