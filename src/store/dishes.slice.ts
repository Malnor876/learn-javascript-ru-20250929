import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from './normalized-mock';
import type { Menu } from '@/types';
import type { StoreEntities } from './types';
const initialState = {
    ids: normalizedDishes.map((dish) => dish.id),
    entities: normalizedDishes.reduce(
        (acc, value) => ({
            ...acc,
            [value.id]: value,
        }),
        {} as StoreEntities<Menu>
    ),
};
export const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {},
    selectors: {
        selectDishesIds: (state) => state.ids,
        selectDishById: (state, id) => state.entities[id],
    },
});
export const { selectDishById, selectDishesIds } = dishesSlice.selectors;
