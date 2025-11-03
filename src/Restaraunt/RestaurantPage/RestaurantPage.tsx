import { RestaurantInfo } from '@/Restaraunt/RestaurantInfo/RestaurantInfo';
import { RestaurantTab } from '@/Restaraunt/RestaurantTab/RestaurantTab';
import { useState } from 'react';
import styles from './RestaurantPage.module.scss';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '@/store/restaurants.slice';
import { Cart } from '@/Cart/Cart';
import { Outlet } from 'react-router';

export const RestaurantPage = () => {
    const restaurants = useSelector(selectRestaurantsIds);
    return (
        <>
            <div className={styles.restaurantsTabs}>
                {restaurants.map((restaurantId) => {
                    return (
                        <RestaurantTab id={restaurantId} key={restaurantId} />
                    );
                })}
            </div>
            <Outlet />
        </>
    );
};
