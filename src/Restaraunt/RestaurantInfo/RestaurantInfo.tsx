import { AuthValueContext } from '@/AuthContext/AuthContext';
import { ReviewForm } from '@/Restaraunt/ReviewForm/ReviewForm';
import { selectRestaurantById } from '@/store/restaurants.slice';
import { useAppSelector } from '@/store/store';
import { useContext } from 'react';
import { NavLink, Outlet, useParams } from 'react-router';
import styles from './RestaurantInfo.module.scss';

export const RestaurantInfo = () => {
    const { id } = useParams();
    const { name } = useAppSelector((state) => selectRestaurantById(state, id));
    const isLogin = useContext(AuthValueContext);
    return (
        <>
            <h2>{name}</h2>
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
    );
};
