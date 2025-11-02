import { RestaurantInfo } from '@/RestaurantInfo/RestaurantInfo';
import { RestaurantTab } from '@/RestaurantTab/RestaurantTab';
import { useState } from 'react';
import styles from './RestaurantPage.module.scss';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '@/store/restaurants.slice';
import { Cart } from '@/Cart/Cart';

export const RestaurantPage = () => {
    const restaurants = useSelector(selectRestaurantsIds);
    const [activeRestaurant, setActiveRestaurant] = useState<string | null>(
        restaurants[0]
    );
    return (
        <>
            <Cart />
            <div className={styles.restaurantsTabs}>
                {restaurants.map((restaurantId) => {
                    return (
                        <RestaurantTab
                            id={restaurantId}
                            key={restaurantId}
                            active={restaurantId === activeRestaurant}
                            onClick={() => setActiveRestaurant(restaurantId)}
                        />
                    );
                })}
            </div>
            {activeRestaurant && <RestaurantInfo id={activeRestaurant} />}
        </>
    );
};
