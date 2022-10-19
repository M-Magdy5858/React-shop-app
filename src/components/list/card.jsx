import './card.css';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import {  AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';

function Card({ product }) {
	product = { ...product, inCart: 1 };

	const globalCartList = useSelector((state) => state.cart.cartList);
	let isProductAdded = globalCartList.some((item) => item.id === product.id);
	const dispatch = useDispatch();


	return (
		<>
			<div className="product-card position-relative d-flex flex-column w-100 align-items-center justify-content-between h-100 ">
				<div className="image overflow-hidden p-2 d-flex align-items-center justify-content-center">
					<img src={product.image} className="w-100" alt="" />
				</div>
					<Link to={`/list/${product.id}`} className="foot d-flex w-100 justify-content-between p-2">
						<div className="title text-truncate">{product.title}</div>
						<div className="price fw-bolder ">{product.price}$</div>
					</Link>

				{isProductAdded ? (
					<div
						type="button"
						onClick={() => {
							dispatch(removeFromCart(product.id));
						}}
						className="add-cart position-absolute"
					>
						<MdOutlineRemoveShoppingCart className=" fs-4 text-danger" />
					</div>
				) : (
					<div
						type="button"
						onClick={() => {
							dispatch(addToCart(product));
						}}
						className="add-cart position-absolute"
					>
						<MdOutlineAddShoppingCart className=" fs-4 text-success" />
					</div>
				)}
				<div type="button" onClick={() => {}} className="add-wish position-absolute">
					<AiOutlineHeart className=" fs-4 text-danger" />
				</div>
			</div>
		</>
	);
}

export default Card;

{
	/* <div className="content d-flex flex-column justify-content-between h-100 p-3">
<div className="head d-flex justify-content-between">
  <div className="title">{product.title}</div>
  <div className="price text-muted">{product.price} $</div>
</div>
<div>{product.category}</div>
<hr />
<div className="btns">
  <button type='button' onClick={()=>{addClick(product)}} className="btn">Add to cart</button>

  <Link to={`/list/${product.id}`} className="link">
    {' '}
    SEE MORE
  </Link>
</div>
</div> */
}