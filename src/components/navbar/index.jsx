import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineHome,AiOutlineShop,AiOutlineShoppingCart,AiOutlineHeart,AiOutlineImport } from 'react-icons/ai'
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import './style.css';

function Navigation() {

	const globalCartCount= useSelector(state=>state.cart.cartCount)


	return (
		<>
			<Navbar bg="transparent"  className='border-bottom border-2 border-dark'>
				<Container>
					<Navbar.Brand className='fs-3 fw-bold nav-logo'> <span className='logo-1'>React</span> <span className='logo-2'>Shop</span> </Navbar.Brand>
					<Nav className="ms-auto ">
						<Link to="/" className="list-item navbar-link mx-3" title='Home'>
							<AiOutlineHome/>
						</Link>
						<Link to="/list" className="list-item navbar-link mx-3" title='Shop'>
							<AiOutlineShop/>
						</Link>
						<Link to="/wishlist" className="list-item navbar-link mx-3" title='WishList'>
							<AiOutlineHeart/>
						</Link>
						<Link to="/cart" className="list-item navbar-link mx-3" title='Cart'>
							<AiOutlineShoppingCart /> <small>{globalCartCount ||''}</small> 
						</Link>
						<Link to="/log-in" className="list-item navbar-link ms-3" title='Log in'>
							<AiOutlineImport/>
						</Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
