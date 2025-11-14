import { createAsyncThunk } from '@reduxjs/toolkit';

export const getDishByRestaurantId = createAsyncThunk(
    'dishes/getDishByRestaurantId',
    async (restaurantId: string, { rejectWithValue }) => {
        const response = await fetch(
            `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
        );
        if (!response.ok) {
            rejectWithValue(response.statusText);
        }
        const data = await response.json();
        if (!data) {
            rejectWithValue('Error');
        }
        return data;
    }
);
