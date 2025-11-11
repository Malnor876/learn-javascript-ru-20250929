import { dishRoutes } from '@/Dish/dish.routes';
import { Layout } from '@/Layout/Layout';
import { restaurantsRoutes } from '@/Restaraunt/restaurant.routes';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [restaurantsRoutes, dishRoutes],
    },
]);
