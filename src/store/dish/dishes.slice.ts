import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { Menu } from '@/types';
import { getDishByRestaurantId } from './get-dish-by-restaurant-id';

const entityAdapter = createEntityAdapter<Menu>();
export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    selectors: {
        selectDishesIds: (state) => state.ids,
        selectDishById: (state, id) => state.entities[id],
    },
    extraReducers: (builder) => {
        builder.addCase(
            getDishByRestaurantId.fulfilled,
            (state, { payload }) => {
                entityAdapter.addMany(state, payload);
            }
        );
    },
});
export const { selectDishById, selectDishesIds } = dishesSlice.selectors;
