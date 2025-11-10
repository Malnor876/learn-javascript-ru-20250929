import { dish_routes } from '@/Dish/dish.routes';
import { Layout } from '@/Layout/Layout';
import { restaurants_routes } from '@/Restaraunt/restaurant.routes';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [restaurants_routes, dish_routes],
    },
]);
