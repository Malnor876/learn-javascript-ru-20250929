import { selectReviewById } from '@/store/reviews.slice';
import { useAppSelector } from '@/store/store';
import type { Review } from '@/types';

export const RestaurantReviewListItem = ({ id }: { id: string }) => {
    const review = useAppSelector((state) => selectReviewById(state, id));
    return <li>{review.text}</li>;
};
