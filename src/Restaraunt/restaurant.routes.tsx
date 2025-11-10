import { RestaurantInfo } from './RestaurantInfo/RestaurantInfo';
import { RestaurantMenu } from './RestaurantMenu/RestaurantMenu';
import { RestaurantPage } from './RestaurantPage/RestaurantPage';
import { RestaurantReviews } from './RestaurantReviews/RestaurantReviews';

export const restaurants_routes = {
    path: 'restaurants',
    Component: RestaurantPage,
    children: [
        {
            path: ':id',
            Component: RestaurantInfo,
            children: [
                {
                    path: 'menu',
                    Component: RestaurantMenu,
                },
                {
                    path: 'reviews',
                    Component: RestaurantReviews,
                },
            ],
        },
    ],
};
