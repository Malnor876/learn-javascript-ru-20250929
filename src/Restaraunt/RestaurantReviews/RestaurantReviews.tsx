import { selectRestaurantById } from '@/store/restaurants.slice';
import { useAppSelector } from '@/store/store';
import { useParams } from 'react-router';
import { RestaurantReviewListItem } from './RestaurantReviewListItem/RestaurantReviewListItem';

export const RestaurantReviews = () => {
    const { id } = useParams();
    const { reviews: reviewIds } = useAppSelector((state) =>
        selectRestaurantById(state, id)
    );
    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviewIds.map((reviewId) => (
                    <RestaurantReviewListItem key={reviewId} id={reviewId} />
                ))}
            </ul>
        </>
    );
};
