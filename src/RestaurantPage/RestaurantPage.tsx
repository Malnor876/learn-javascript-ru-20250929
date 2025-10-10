import { restaurants } from '@/mocks/restaurant.mock';
import { RestaurantMenu } from '@/RestaurantMenu/RestaurantMenu';
import { RestaurantReview } from '@/RestaurantReview/RestaurantReview';
import { RestaurantTab } from '@/RestaurantTab/RestaurantTab';
import type { Restaurant } from '@/types';
import { useState } from 'react';

export const RestaurantPage = () => {
    const [activeRestaurant, setActiveRestaurant] = useState<Restaurant | null>(
        restaurants[0]
    );
    return (
        <>
            <div className="restaurants-tabs">
                {restaurants.map((restaurant) => {
                    return (
                        <RestaurantTab
                            name={restaurant.name}
                            key={restaurant.id}
                            active={restaurant.id === activeRestaurant?.id}
                            onClick={() => setActiveRestaurant(restaurant)}
                        />
                    );
                })}
            </div>
            {activeRestaurant && (
                <>
                    <h2>{activeRestaurant.name}</h2>
                    <h3>Меню</h3>
                    <ul>
                        {activeRestaurant.menu.map((menu) => (
                            <RestaurantMenu key={menu.id} menu={menu} />
                        ))}
                    </ul>
                    <h3>Отзывы</h3>
                    <ul>
                        {activeRestaurant.reviews.map((review) => (
                            <RestaurantReview key={review.id} review={review} />
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};
