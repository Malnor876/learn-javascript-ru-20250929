import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './restaurants.slice';
import { dishesSlice } from './dishes.slice';
import { userSlice } from './users.slice';
import { reviewsSlice } from './reviews.slice';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from './cart.slice';

export const store = configureStore({
    reducer: {
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [userSlice.name]: userSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
