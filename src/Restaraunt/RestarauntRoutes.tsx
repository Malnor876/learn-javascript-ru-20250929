import { Route } from 'react-router';
import { RestaurantPage } from './RestaurantPage/RestaurantPage';
import { RestaurantInfo } from './RestaurantInfo/RestaurantInfo';
import { RestaurantMenu } from './RestaurantMenu/RestaurantMenu';
import { RestaurantReviews } from './RestaurantReviews/RestaurantReviews';

export const RestaurantRoutes = () => {
    return (
        <>
            <Route path="restaurants" element={<RestaurantPage />}>
                <Route path=":id" element={<RestaurantInfo />}>
                    <Route path="menu" element={<RestaurantMenu />} />
                    <Route path="reviews" element={<RestaurantReviews />} />
                </Route>
            </Route>
        </>
    );
};
