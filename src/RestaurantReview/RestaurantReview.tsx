import type { Review } from '@/types';

export const RestaurantReview = ({ review }: { review: Review }) => {
    return <li>{review.text}</li>;
};
