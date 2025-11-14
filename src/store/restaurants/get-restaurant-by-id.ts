import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRestaurantById = createAsyncThunk(
    'restaurants/getById',
    async (id, { rejectWithValue }) => {
        const response = await fetch(
            `http://localhost:3001/api/restaurant/${id}`
        );

        if (!response.ok) {
            rejectWithValue(response.statusText);
        }
        const data = await response.json();
        return data;
    }
);
