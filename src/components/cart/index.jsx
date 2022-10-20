import { removeFromCart, increament, decreament } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './cart.css';
import empty from '../../assets/cart-empty.png';
function Cart() {
	const globalCartCount = useSelector((state) => state.cart.cartCount);
	const globalCartList = useSelector((state) => state.cart.cartList);
	const dispatch = useDispatch();

	const GetTotal = () => {
		let tot = 0;
		globalCartList.forEach((item) => {
			tot += item.price * item.inCart;
		});
		return tot.toFixed(2);
	};
	if (!globalCartCount)
		return (
			<div className=" d-flex justify-content-center mt-5">
				<div className="text-center">
					<img src={empty} alt="" />
					<h1 className="my-3">Empty Cart</h1>
					<hr />
					<Link to={'/list'} className="link-dark">
						Go to shop
					</Link>
				</div>
			</div>
		);
	return (
		<div className="container py-5 cart">
			<h1>Cart</h1>

			<div className="row align-align-items-baseline">
				<div className="col-md-8">
					{globalCartList.map((item) => {
						let total = item.price * item.inCart;
						return (
							<div key={item.id} className="row cart-row py-3 my-4">
								<div className="col-3">
									<div className="image w-75">
										<img src={item.image} className="w-100" alt="" />
									</div>
								</div>

								<div className="col-5 d-flex flex-column justify-content-between">
									<div>
										<h5>{item.title}</h5>
										<i className="text-muted">price {item.price}</i>
									</div>
									<p>Total is {total} $</p>
								</div>
								<div className="col-2">
									<div className="counter d-flex justify-content-around">
										<span
											className="p-2"
											onClick={() => {
												dispatch(decreament(item.id));
											}}
										>
											-
										</span>
										<span className="p-2">{item.inCart}</span>
										<span
											className="p-2"
											onClick={() => {
												dispatch(increament(item.id));
											}}
										>
											+
										</span>
									</div>
								</div>

								<div className="col-2 p-0 text-end">
									<MdOutlineRemoveShoppingCart
										type="button"
										className="fs-4"
										onClick={() => {
											dispatch(removeFromCart(item.id));
										}}
									/>
								</div>
							</div>
						);
					})}
				</div>
				<div className="col-md-4 px-5">
					<div className="total-box text-center d-flex flex-column p-3">
						<h4 className="">Your Order</h4>
						<i className="text-muted">number of items: {globalCartCount}</i>
						<br />
						<input type="text" placeholder="Enter promo code" />
						<hr />
						<div className="d-flex justify-content-between total">
							<p>Total :</p>
							<p>{GetTotal()} $</p>
						</div>
						<button className="check">Check Out</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
