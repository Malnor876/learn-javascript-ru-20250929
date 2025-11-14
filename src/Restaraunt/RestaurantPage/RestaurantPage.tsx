import { RestaurantTab } from '@/Restaraunt/RestaurantTab/RestaurantTab';
import styles from './RestaurantPage.module.scss';

import { Outlet } from 'react-router';
import {
    selectRequestStatus,
    selectRestaurantsIds,
} from '@/store/restaurants/restaurants.slice';

import { getRestaurants } from '@/store/restaurants/get-restaurants';

import { Loader } from '@/shared/Loader/Loader';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useEffect } from 'react';
import { StoreRequestStatus } from '@/store/types';
import { ErrorInfo } from '@/shared/Error/ErrorInfo';

export const RestaurantPage = () => {
    const dispatch = useAppDispatch();
    const restaurants = useAppSelector(selectRestaurantsIds);
    const status = useAppSelector(selectRequestStatus);
    useEffect(() => {
        if (!restaurants.length) {
            dispatch(getRestaurants());
        }
    }, [dispatch, restaurants]);
    console.log('status', status);
    return (
        <>
            {status === StoreRequestStatus.FULFILLED ? (
                <>
                    <div className={styles.restaurantsTabs}>
                        {restaurants.map((restaurantId) => {
                            return (
                                <RestaurantTab
                                    id={restaurantId}
                                    key={restaurantId}
                                />
                            );
                        })}
                    </div>
                    <Outlet />{' '}
                </>
            ) : (
                <Loader />
            )}

            {status === StoreRequestStatus.REJECTED && <ErrorInfo />}
        </>
    );
};
