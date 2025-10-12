import type { Review } from '@/types';

export const RestaurantReviewListItem = ({ review }: { review: Review }) => {
    return <li>{review.text}</li>;
};
