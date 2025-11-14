import { createAsyncThunk } from '@reduxjs/toolkit';

export const getReviewsByRestaurantId = createAsyncThunk(
    'reviews/getReviewsByRestaurantId',
    async (restaurantId: string, { rejectWithValue }) => {
        const response = await fetch(
            `http://localhost:3001/api/reviews?restaurantId=:${restaurantId}`
        );
        const data = await response.json();
        if (!data) {
            rejectWithValue('Error');
        }
        return data;
    }
);
