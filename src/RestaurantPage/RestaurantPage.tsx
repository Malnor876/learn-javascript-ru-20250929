import { restaurants } from '@/mocks/restaurant.mock';
import { RestaurantInfo } from '@/RestaurantInfo/RestaurantInfo';
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
                <RestaurantInfo restaurant={activeRestaurant} />
            )}
        </>
    );
};
