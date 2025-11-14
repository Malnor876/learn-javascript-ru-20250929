import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from './cart.slice';
import { restaurantsSlice } from './restaurants/restaurants.slice';
import { requestSlice } from './request.slice';
import { dishesSlice } from './dish/dishes.slice';
import { reviewsSlice } from './review/reviews.slice';
import { userSlice } from './users/users.slice';

export const store = configureStore({
    reducer: {
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [userSlice.name]: userSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [requestSlice.name]: requestSlice.reducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
