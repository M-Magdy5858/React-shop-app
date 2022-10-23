import { addToCart, removeFromCart } from '../../redux/cartSlice';
import { removeFromwish } from '../../redux/wishSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { FaHeartBroken } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import './style.css';
import empty from '../../assets/wish-empty2.png';

function Wishlist() {
	const globalWishList = useSelector((state) => state.wish.wishList);

	const globalCartList = useSelector((state) => state.cart.cartList);
	// let isProductAdded = globalCartList.some((item) => item.id === product.id);

	const dispatch = useDispatch();

	const toastStyle = {
		fontFamily: "'Courier New', Courier, monospace",
		fontWeight: 'bold',
		borderRadius: 0,
		border: '2px solid black',
		boxShadow: '3px 3px 0 black',
	};

	if (!globalWishList.length)
		return (
			<>
				<div>
					<Toaster position="top-center" />
				</div>
				<div className=" d-flex justify-content-center mt-5">
					<div className="text-center">
						<img src={empty} alt="" />
						<h1 className="my-3">Empty Wish List</h1>
						<hr />
						<Link to={'/list'} className="link-dark">
							Go to shop
						</Link>
					</div>
				</div>
			</>
		);
	return (
		<>
			<div>
				<Toaster position="top-center" />
			</div>
			<div className="container my-5">
				<div className="w-75 mx-auto wishlist">
					<h1>Wish List!</h1>
					{globalWishList.map((item) => {
						return (
							<div key={item.id} className="row cart-row py-3 my-4">
								<div className="col-4">
									<div className="image w-75">
										<img src={item.image} className="w-100" alt={item.tit} />
									</div>
								</div>

								<div className="col-6 d-flex flex-column justify-content-between">
									<div>
										<h5>{item.title}</h5>
										<i className="text-muted">Category : {item.category}</i>
										<p className="text-success">price : {item.price} $</p>
										<Link to={`/list/${item.id}`}>See more Details</Link>
									</div>
									<p className="m-0">
										Rated <big> {item.rating.rate}/10 </big> by <big>{item.rating.count}</big> customers.
									</p>
								</div>
								<div className="col-2 position-relative">
									{/* add or remove from cart buttons */}
									{globalCartList.some((product) => product.id === item.id) ? (
										<div
											type="button"
											onClick={() => {
												toast.error('Removed from cart!', { style: toastStyle });
												dispatch(removeFromCart(item.id));
											}}
											className="add-cart position-absolute"
										>
											<MdOutlineRemoveShoppingCart className=" fs-2 text-danger" />
										</div>
									) : (
										<div
											type="button"
											onClick={() => {
												toast.success('Added to cart!', { style: toastStyle });
												dispatch(addToCart(item));
											}}
											className="add-cart position-absolute"
										>
											<MdOutlineAddShoppingCart className=" fs-2 text-success" />
										</div>
									)}
									<div
										type="button"
										onClick={() => {
											toast.error('Removed from Wish List!', { icon: '💔', style: toastStyle });
											dispatch(removeFromwish(item.id));
										}}
										className="add-wish position-absolute"
									>
										<FaHeartBroken className=" fs-4 text-danger" />
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Wishlist;
