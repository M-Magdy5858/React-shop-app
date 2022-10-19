import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Card from './card';

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

	return (
		<>
			<div className="container py-4">
				<h1 className="my-3">Shop</h1>

				<div className="row">
					{products.map((product) => {
						return (
							<div key={product.id} className="col-md-3 mb-4">
                <Card product={product}></Card>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default List;
