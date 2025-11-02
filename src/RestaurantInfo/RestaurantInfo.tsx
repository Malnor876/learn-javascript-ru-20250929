import { AuthValueContext } from '@/AuthContext/AuthContext';
import { RestaurantDishListItem } from '@/RestaurantDishListItem/RestaurantDishListItem';
import { RestaurantReviewListItem } from '@/RestaurantReviewListItem/RestaurantReviewListItem';
import { ReviewForm } from '@/ReviewForm/ReviewForm';
import { selectRestaurantById } from '@/store/restaurants.slice';
import { useAppSelector } from '@/store/store';
import type { Restaurant } from '@/types';
import { useContext } from 'react';

interface RestaurantInfoProps {
    id: string;
}
export const RestaurantInfo = ({ id }: RestaurantInfoProps) => {
    const {
        menu: menuIds,
        reviews: reviewIds,
        name,
    } = useAppSelector((state) => selectRestaurantById(state, id));
    const isLogin = useContext(AuthValueContext);
    return (
        <>
            <h2>{name}</h2>
            <h3>Меню</h3>
            <ul>
                {menuIds.map((menuId) => (
                    <RestaurantDishListItem key={menuId} id={menuId} />
                ))}
            </ul>
            <h3>Отзывы</h3>
            <ul>
                {reviewIds.map((reviewId) => (
                    <RestaurantReviewListItem key={reviewId} id={reviewId} />
                ))}
            </ul>
            {isLogin && <ReviewForm />}
        </>
    );
};
