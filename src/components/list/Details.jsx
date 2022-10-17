import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import './style.css'

function Details() {
	const params = useParams();

	const [product, setProduct] = useState(null);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${params.id}`)
			.then((res) => res.json())
			.then((json) => setProduct(json));
	}, []);

	if (!product) {
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
			<div className="container my-5">
				<div className="row">
					<div className="col-8 px-5">
						<h1>{product.title}</h1>
						<p className="text-muted">category : {product.category}</p>
						<p className="text-success">price : {product.price} EGP</p>
						<hr />
						<p>
							description : <br /> {product.description}
						</p>
					</div>
          <div className="col-4">
            <div className="photo">

            <img src={product.image} alt="" />
            </div>
          </div>
				</div>
			</div>
		</>
	);
}

export default Details;
