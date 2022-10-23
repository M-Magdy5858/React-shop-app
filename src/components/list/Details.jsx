import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import './style.css';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartSlice';
import { addTowish, removeFromwish } from '../../redux/wishSlice';
import toast, { Toaster } from 'react-hot-toast';

function Details() {
	const params = useParams();
	const [product, setProduct] = useState(null);
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${params.id}`)
			.then((res) => res.json())
			.then((json) => setProduct(json));
	});

	const globalCartList = useSelector((state) => state.cart.cartList);
	const globalWishList = useSelector((state) => state.wish.wishList);
	let isProductAdded = globalCartList.some((item) => item.id === product?.id);
	let isProductWished = globalWishList.some((item) => item.id === product?.id);

	const dispatch = useDispatch();

	const toastStyle = {
		fontFamily: "'Courier New', Courier, monospace",
		fontWeight: 'bold',
		borderRadius: 0,
		border: '2px solid black',
		boxShadow: '3px 3px 0 black',
	};

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
			<div>
				<Toaster position="top-center" />
			</div>
			<div className="container my-5">
				<div className="row">
					<div className="col-8 px-5 position-relative">
						<h1>{product.title}</h1>
						<p className="text-muted">category : {product.category}</p>

						<p className="text-success">price : {product.price} $</p>
						<hr />
						<p className="mb-5">
							description : <br /> {product.description}
						</p>


						{isProductWished ? (
							<div
								type="button"
								onClick={() => {
									toast.error('Removed from Wish List!', { icon: '💔', style: toastStyle });
									dispatch(removeFromwish(product.id));
								}}
								className="add-wish position-absolute fs-3"
							>
								<AiFillHeart className=" fs-4 text-danger" />
							</div>
						) : (
							<div
								type="button"
								onClick={() => {
									toast.success('Added to Wish List!', { icon: '💖', style: toastStyle });
									dispatch(addTowish(product));
								}}
								className="add-wish position-absolute fs-3"
							>
								<AiOutlineHeart className=" fs-4 text-danger" />
							</div>
						)}

						<div className="btns">
							{isProductAdded ? (
								<button
									className="remove "
									onClick={() => {
										toast.error('Removed from cart!', { style: toastStyle });
										dispatch(removeFromCart(product.id));
									}}
								>
									<MdOutlineRemoveShoppingCart /> Remove from cart
								</button>
							) : (
								<button
									className="add"
									onClick={() => {
										toast.success('Added to cart!', { style: toastStyle });
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
						<p className="text-muted my-3 text-center">
							Rated <big> {product.rating.rate}/10 </big> by <big>{product.rating.count}</big> customers.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Details;
