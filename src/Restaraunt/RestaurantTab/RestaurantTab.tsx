import classNames from 'classnames';
import styles from './RestaurantTab.module.scss';

import { useAppSelector } from '@/store/store';
import { NavLink } from 'react-router';
import { selectRestaurantById } from '@/store/restaurants/restaurants.slice';
export const RestaurantTab = ({ id }: { id: string }) => {
    const { name } = useAppSelector((state) => selectRestaurantById(state, id));
    return (
        <NavLink
            to={`${id}`}
            className={({ isActive }) =>
                classNames(styles.restaurantTab, {
                    [styles.restaurantTabActive]: isActive,
                })
            }
        >
            {name}
        </NavLink>
    );
};
