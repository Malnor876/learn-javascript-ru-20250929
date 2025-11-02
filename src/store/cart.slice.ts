import { createSlice } from '@reduxjs/toolkit';
const initialState: { [key: string]: number } = {};
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state[payload] = (state[payload] || 0) + 1;
        },
        removeFromCart: (state, { payload }) => {
            if (!state[payload]) {
                return state;
            }
            state[payload] = state[payload] - 1;
            if (state[payload] <= 0) {
                delete state[payload];
            }
        },
    },
    selectors: {
        selectAmountById: (state, id) => state[id] || 0,
        selectCartItemsIds: (state) => Object.keys(state),
    },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectAmountById, selectCartItemsIds } = cartSlice.selectors;
