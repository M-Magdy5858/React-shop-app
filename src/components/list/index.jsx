import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Card from './card';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

function List() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => setProducts(json));
	}, []);

	if (!products) {
		return (
			<>
				<div className="d-flex justify-content-center align-items-center vh-100 vw-90">
					<Spinner animation="border" />
				</div>
			</>
		);
	}

	const cardVariants = {
		offscreen: {
			y:100,
		},
		onscreen: {
			y: 0,
			transition: {
				type: 'spring',
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};

	return (
		<>
			<div>
				<Toaster position="top-center" />
			</div>
			<div className="container py-4">
				<h1 className="mb-5">Shop</h1>

				<div className="row">
					{products.map((product) => {
						return (
							<>
								<motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }} className="col-md-3 mb-4">
									<motion.div  variants={cardVariants}>
										<div key={product.id} >
											<Card product={product}/>
										</div>
									</motion.div>
								</motion.div>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default List;
