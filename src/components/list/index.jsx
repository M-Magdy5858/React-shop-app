import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

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
				<h1 className="text-info">Shop</h1>

				<div className="row">
					{products.map((product) => {
						return (
							<div className="col-md-3 mb-4">
								<Card style={{ width: '100%' }} className="d-flex flex-column">
                  <div className='w-100 overflow-hidden ' style={{height:'200px'}} >

									<Card.Img variant="top" src={product.image}  className='w-75 '/>
                  </div>
									<Card.Body>
										<Card.Title>{product.title}</Card.Title>
										<Card.Text>
                      <p className='text-info' >price : {product.price} EGP</p>
                      {product.category}
                      </Card.Text>
                    
                    <Link to={`/list/${product.id}`} > <a >SEE MORE</a></Link>
									</Card.Body>
								</Card>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default List;
