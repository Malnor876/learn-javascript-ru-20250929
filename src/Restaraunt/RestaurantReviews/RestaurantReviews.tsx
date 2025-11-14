import { useAppDispatch, useAppSelector } from '@/store/store';
import { useParams } from 'react-router';
import { RestaurantReviewListItem } from './RestaurantReviewListItem/RestaurantReviewListItem';
import { selectReviewsIds } from '@/store/review/reviews.slice';
import { useRequest } from '@/hooks/use-request';
import { getReviewsByRestaurantId } from '@/store/review/get-reviews-by-restaurant-id';
import { Loader } from '@/shared/Loader/Loader';
import { selectUsersIds } from '@/store/users/users.slice';
import { useEffect } from 'react';
import { getUsers } from '@/store/users/get-users';
import { StoreRequestStatus } from '@/store/types';
import { ErrorInfo } from '@/shared/Error/ErrorInfo';

export const RestaurantReviews = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const status = useRequest(getReviewsByRestaurantId, id);
    const reviewIds = useAppSelector(selectReviewsIds);
    const userIds = useAppSelector(selectUsersIds);
    useEffect(() => {
        if (!userIds.length) {
            dispatch(getUsers());
        }
    }, [dispatch, userIds]);

    return (
        <>
            <h3>Отзывы</h3>
            {status === StoreRequestStatus.FULFILLED ? (
                <ul>
                    {reviewIds.map((reviewId) => (
                        <RestaurantReviewListItem
                            key={reviewId}
                            id={reviewId}
                        />
                    ))}
                </ul>
            ) : (
                <Loader />
            )}
            {status === StoreRequestStatus.REJECTED && <ErrorInfo />}
        </>
    );
};
