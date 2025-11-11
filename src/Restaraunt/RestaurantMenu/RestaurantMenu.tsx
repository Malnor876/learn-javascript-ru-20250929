import { useParams } from 'react-router';
import { RestaurantDishListItem } from './RestaurantDishListItem/RestaurantDishListItem';
import { useAppSelector } from '@/store/store';
import { selectRestaurantById } from '@/store/restaurants.slice';

export const RestaurantMenu = () => {
    const { id } = useParams();
    const { menu: menuIds } = useAppSelector((state) =>
        selectRestaurantById(state, id)
    );
    return (
        <>
            <h3>Меню</h3>
            <ul>
                {menuIds.map((menuId) => (
                    <RestaurantDishListItem key={menuId} id={menuId} />
                ))}
            </ul>
        </>
    );
};
