import { selectReviewById } from '@/store/reviews.slice';
import { useAppSelector } from '@/store/store';

export const RestaurantReviewListItem = ({ id }: { id: string }) => {
    const review = useAppSelector((state) => selectReviewById(state, id));
    return <li>{review.text}</li>;
};
