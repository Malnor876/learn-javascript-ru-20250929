import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { Restaurant } from '@/types';
import { getRestaurants } from './get-restaurants';
import { getRestaurantById } from './get-restaurant-by-id';
import { StoreRequestStatus } from '../types';

const entityAdapter = createEntityAdapter<Restaurant>();

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
        ...entityAdapter.getInitialState(),
        requestStatus: StoreRequestStatus.IDLE,
    },
    reducers: {},
    selectors: {
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getRestaurants.pending, (state, action) => {
                console.log(action);

                state.requestStatus = StoreRequestStatus.PENDING;
            })
            .addCase(getRestaurants.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);

                state.requestStatus = StoreRequestStatus.FULFILLED;
            })
            .addCase(getRestaurants.rejected, (state) => {
                state.requestStatus = StoreRequestStatus.REJECTED;
            })
            .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
                entityAdapter.setOne(state, payload);
            }),
});
export const {
    selectRestaurantById,
    selectRestaurantsIds,
    selectRequestStatus,
} = restaurantsSlice.selectors;
