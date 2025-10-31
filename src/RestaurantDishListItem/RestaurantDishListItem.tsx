import type { Menu } from '@/types';
import { useContext, useState } from 'react';
import './RestaurantDishListItem.module.scss';
import { DishCounter } from '@/DishCounter/DishCounter';
import { AuthValueContext } from '@/AuthContext/AuthContext';
import { useAppSelector } from '@/store/store';
import { selectDishById } from '@/store/dishes.slice';

export const RestaurantDishListItem = ({ id }: { id: string }) => {
    const menu = useAppSelector((state) => selectDishById(state, id));

    const isLogin = useContext(AuthValueContext);
    return (
        <li className="restaurant-menu_item">
            {menu.name} {isLogin && <DishCounter max={20} id={menu.id} />}
        </li>
    );
};
