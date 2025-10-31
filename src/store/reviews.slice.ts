import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from './normalized-mock';
import type { StoreEntities } from './types';
import type { Review } from '@/types';
const initialState = {
    ids: normalizedReviews.map((review) => review.id),
    entities: normalizedReviews.reduce((acc, value) => {
        acc[value.id] = value;
        return acc;
    }, {} as StoreEntities<Review>),
};
export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    selectors: {
        selectReviewsIds: (state) => state.ids,
        selectReviewById: (state, id) => state.entities[id],
    },
});
export const { selectReviewById, selectReviewsIds } = reviewsSlice.selectors;
