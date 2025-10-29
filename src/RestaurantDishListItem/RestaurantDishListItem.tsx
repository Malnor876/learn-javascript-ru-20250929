import type { Menu } from '@/types';
import { useContext, useState } from 'react';
import './RestaurantDishListItem.module.scss';
import { DishCounter } from '@/DishCounter/DishCounter';
import { AuthValueContext } from '@/AuthContext/AuthContext';

export const RestaurantDishListItem = ({ menu }: { menu: Menu }) => {
    const [counter, setCounter] = useState(0);

    const isLogin = useContext(AuthValueContext);
    return (
        <li className="restaurant-menu_item">
            {menu.name}{' '}
            {isLogin && (
                <DishCounter value={counter} onChange={setCounter} max={20} />
            )}
        </li>
    );
};
