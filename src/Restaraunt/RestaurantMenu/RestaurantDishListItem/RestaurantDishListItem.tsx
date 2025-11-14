import { useContext } from 'react';
import './RestaurantDishListItem.module.scss';
import { AuthValueContext } from '@/AuthContext/AuthContext';
import { useAppSelector } from '@/store/store';
import { useNavigate } from 'react-router';
import { selectDishById } from '@/store/dish/dishes.slice';

export const RestaurantDishListItem = ({ id }: { id: string }) => {
    const menu = useAppSelector((state) => selectDishById(state, id));
    const navigate = useNavigate();

    const isLogin = useContext(AuthValueContext);
    return (
        <li
            className="restaurant-menu_item"
            onClick={() => isLogin && navigate(`/dish/${id}`)}
        >
            {menu.name}
        </li>
    );
};
