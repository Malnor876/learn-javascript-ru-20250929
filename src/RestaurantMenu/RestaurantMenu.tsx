import type { Menu } from '@/types';
import { useState } from 'react';
import './RestaurantMenu.scss';

export const RestaurantMenu = ({ menu }: { menu: Menu }) => {
    const [counter, setCounter] = useState(0);
    return (
        <li className="restaurant-menu_item">
            {menu.name}{' '}
            <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
                -
            </button>
            {counter}
            <button onClick={() => setCounter(counter < 5 ? counter + 1 : 5)}>
                +
            </button>
        </li>
    );
};
