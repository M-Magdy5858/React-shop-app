import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	wishList: [],
};

export const wishSlice = createSlice({
	name: 'wish',
	initialState,
	reducers: {
		addTowish: (state, actoin) => {
			state.wishList.push(actoin.payload);
		},
		removeFromwish: (state, actoin) => {
			state.wishList = state.wishList.filter((item) => {
				return item.id != actoin.payload;
			});
		},
	},
});

export const { addTowish, removeFromwish } = wishSlice.actions;
