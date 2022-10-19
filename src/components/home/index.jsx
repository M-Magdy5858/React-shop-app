import { Link } from 'react-router-dom';
import hero from '../../assets/cart.png';
import './style.css';
function Home() {
	return (
		<>
			<h1 className="text-danger text-center my-5">Welcome!</h1>

			<div className="container">
				<div className="row">
					<div className="col-8">
						<h1 className="mb-5">This is a React & Redux project!</h1>
						<h4 className='mb-4'>A simple shopping list and cart</h4>
            <Link to="/list">Go to Shop</Link>
					</div>
					<div className="col-4">
						<div className="hero-img">
							<img src={hero} alt="" className="w-75" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
