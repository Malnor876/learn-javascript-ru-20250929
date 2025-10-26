import type { Menu } from '@/types';
import { useState } from 'react';
import './RestaurantDishListItem.scss';
import { DishCounter } from '@/DishCounter/DishCounter';

export const RestaurantDishListItem = ({ menu }: { menu: Menu }) => {
    const [counter, setCounter] = useState(0);
    return (
        <li className="restaurant-menu_item">
            {menu.name}{' '}
            <DishCounter value={counter} onChange={setCounter} max={20} />
        </li>
    );
};
