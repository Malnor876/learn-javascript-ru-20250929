import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantsIds } from './restaurants.slice';
import type { RootState } from '../store';
const createRestaurantsSliceAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState;
}>();
export const getRestaurants = createRestaurantsSliceAsyncThunk(
    'restaurants/getRestaurants',
    async () => {
        const response = await fetch('http://localhost:3001/api/restaurants/ ');
        const result = await response.json();
        return result;
    },
    {
        condition: (_, { getState }) => {
            return selectRestaurantsIds(getState())?.length === 0;
        },
    }
);
