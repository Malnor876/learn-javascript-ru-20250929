import { AuthValueContext } from '@/AuthContext/AuthContext';
import { RestaurantDishListItem } from '@/RestaurantDishListItem/RestaurantDishListItem';
import { RestaurantReviewListItem } from '@/RestaurantReviewListItem/RestaurantReviewListItem';
import { ReviewForm } from '@/ReviewForm/ReviewForm';
import type { Restaurant } from '@/types';
import { useContext } from 'react';

interface RestaurantInfoProps {
    restaurant: Restaurant;
}
export const RestaurantInfo = ({ restaurant }: RestaurantInfoProps) => {
    const isLogin = useContext(AuthValueContext);
    return (
        <>
            <h2>{restaurant.name}</h2>
            <h3>Меню</h3>
            <ul>
                {restaurant.menu.map((menu) => (
                    <RestaurantDishListItem key={menu.id} menu={menu} />
                ))}
            </ul>
            <h3>Отзывы</h3>
            <ul>
                {restaurant.reviews.map((review) => (
                    <RestaurantReviewListItem key={review.id} review={review} />
                ))}
            </ul>
            {isLogin && <ReviewForm />}
        </>
    );
};
