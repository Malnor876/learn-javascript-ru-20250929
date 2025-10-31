import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from './normalized-mock';
import type { Restaurant } from '@/types';

const initialState = {
    ids: normalizedRestaurants.map(({ id }) => id),
    entities: normalizedRestaurants.reduce(
        (acc, item) => {
            acc[item.id] = item;

            return acc;
        },
        {} as { [key: string]: Restaurant }
    ),
};
export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {},
    selectors: {
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
    },
});
export const { selectRestaurantById, selectRestaurantsIds } =
    restaurantsSlice.selectors;
