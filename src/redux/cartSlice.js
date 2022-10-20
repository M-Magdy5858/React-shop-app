import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartList: [],
	cartCount: 0,
};
const getTotalCount = (list) => {
	let total = 0;
	list.forEach((item) => {
		total += item.inCart;
	});
	return total;
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cartList.push(action.payload);
			state.cartCount = getTotalCount(state.cartList);
		},
		removeFromCart: (state, action) => {
			state.cartList = state.cartList.filter((item) => {
				return item.id != action.payload;
			});
			state.cartCount = getTotalCount(state.cartList);
		},
		increament: (state, action) => {
			let i = state.cartList.findIndex((item) => item.id === action.payload);
			state.cartList[i].inCart += 1;
			state.cartCount = getTotalCount(state.cartList);
		},
		decreament: (state, action) => {
			let i = state.cartList.findIndex((item) => item.id === action.payload);
			if (state.cartList[i].inCart === 1) return;
			state.cartList[i].inCart -= 1;
			state.cartCount = getTotalCount(state.cartList);
		},
	},
});

export const { addToCart, removeFromCart, increament, decreament } = cartSlice.actions;
