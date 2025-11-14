import { selectReviewById } from '@/store/review/reviews.slice';
import { useAppSelector } from '@/store/store';

export const RestaurantReviewListItem = ({ id }: { id: string }) => {
    const review = useAppSelector((state) => selectReviewById(state, id));
    return <li>{review.text}</li>;
};
