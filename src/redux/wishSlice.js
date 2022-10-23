import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	wishList: [],
	itemsCount: 0,
};

export const wishSlice = createSlice({
	name: 'wish',
	initialState,
	reducers: {
		addTowish: (state, actoin) => {
			state.wishList.push(actoin.payload);
			state.itemsCount += 1;
		},
		removeFromwish: (state, actoin) => {
			state.wishList = state.wishList.filter((item) => {
				return item.id != actoin.payload;
			});
			state.itemsCount -= 1;
		},
	},
});

export const { addTowish, removeFromwish } = wishSlice.actions;
