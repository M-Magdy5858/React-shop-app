import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import './style.css';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartSlice';

function Details() {
	const params = useParams();
	const [product, setProduct] = useState(null);
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${params.id}`)
			.then((res) => res.json())
			.then((json) => setProduct(json));
	});

	const globalCartList = useSelector((state) => state.cart.cartList);
	let isProductAdded = globalCartList.some((item) => item.id === product.id);
	const dispatch = useDispatch();

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
						<p className='mb-5'>
							description : <br /> {product.description}
						</p>

						<div className="btns">
							{isProductAdded ? (
								<button
                className='remove '
									onClick={() => {
										dispatch(removeFromCart(product.id));
									}}
								>
									<MdOutlineRemoveShoppingCart /> Remove from cart
								</button>
							) : (
								<button
                className='add'
									onClick={() => {
										dispatch(addToCart({ ...product, inCart: 1 }));
									}}
								>
									<MdOutlineAddShoppingCart /> Add to cart
								</button>
							)}
						</div>
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
