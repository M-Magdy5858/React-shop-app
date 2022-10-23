import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import hero from '../../assets/cart.png';
import './style.css';

function Home() {
	return (
		<>
			<h1 className="text-danger text-center my-5">Welcome!</h1>
			<div className="container">
				<div className="row">
					<div className="col-8 css-typing">
				<motion.div initial={{ scale: 0, opacity:0 }} animate={{ scale: 1, opacity:1 }} transition={{ delay: 0, duration: 0.4 }}>
						<h1 className="mb-5">This is a React & Redux project!</h1>
				</motion.div>
						<h4 className="mb-4">
							<Typewriter options={{ strings: ['A simple shopping list and cart!'], autoStart: true, loop: true, delay: 40 }} />
						</h4>
						<Link to="/list">Go to Shop</Link> <br />
						<Link to="/sign-up"> Go to Sign-up page</Link>
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
