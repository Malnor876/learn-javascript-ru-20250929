import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { Review } from '@/types';
import { getReviewsByRestaurantId } from './get-reviews-by-restaurant-id';
const entityAdapter = createEntityAdapter<Review>();
export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    selectors: {
        selectReviewsIds: (state) => state.ids,
        selectReviewById: (state, id) => state.entities[id],
    },
    extraReducers: (builder) => {
        builder.addCase(
            getReviewsByRestaurantId.fulfilled,
            (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            }
        );
    },
});
export const { selectReviewById, selectReviewsIds } = reviewsSlice.selectors;
