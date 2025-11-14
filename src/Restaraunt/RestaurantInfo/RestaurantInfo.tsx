import { AuthValueContext } from '@/AuthContext/AuthContext';
import { ReviewForm } from '@/Restaraunt/ReviewForm/ReviewForm';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useContext } from 'react';
import { NavLink, Outlet, useParams } from 'react-router';
import styles from './RestaurantInfo.module.scss';
import { selectRestaurantById } from '@/store/restaurants/restaurants.slice';
import { useRequest } from '@/hooks/use-request';
import { getRestaurantById } from '@/store/restaurants/get-restaurant-by-id';
import { Loader } from '@/shared/Loader/Loader';
import { StoreRequestStatus } from '@/store/types';
import { ErrorInfo } from '@/shared/Error/ErrorInfo';

export const RestaurantInfo = () => {
    const { id } = useParams();
    const status = useRequest(getRestaurantById, id);
    const { name } = useAppSelector((state) => selectRestaurantById(state, id));
    const isLogin = useContext(AuthValueContext);
    return (
        <>
            <h2>{name}</h2>
            {status === StoreRequestStatus.FULFILLED ? (
                <>
                    {' '}
                    <div>
                        <NavLink className={styles.tab} to="menu">
                            Меню
                        </NavLink>
                        <NavLink className={styles.tab} to="reviews">
                            Отзывы
                        </NavLink>
                    </div>
                    <Outlet />
                    {isLogin && <ReviewForm />}
                </>
            ) : (
                <Loader />
            )}

            {status === StoreRequestStatus.REJECTED && <ErrorInfo />}
        </>
    );
};
