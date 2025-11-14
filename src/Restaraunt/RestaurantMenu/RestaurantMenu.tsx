import { useParams } from 'react-router';
import { RestaurantDishListItem } from './RestaurantDishListItem/RestaurantDishListItem';
import { useAppSelector } from '@/store/store';
import { getDishByRestaurantId } from '@/store/dish/get-dish-by-restaurant-id';
import { Loader } from '@/shared/Loader/Loader';
import { useRequest } from '@/hooks/use-request';
import { selectDishesIds } from '@/store/dish/dishes.slice';
import { StoreRequestStatus } from '@/store/types';
import { ErrorInfo } from '@/shared/Error/ErrorInfo';

export const RestaurantMenu = () => {
    const { id } = useParams();
    console.log('id', id);
    const status = useRequest(getDishByRestaurantId, id);
    const menuIds = useAppSelector(selectDishesIds);

    return (
        <>
            <h3>Меню</h3>
            {status === StoreRequestStatus.FULFILLED ? (
                <ul>
                    {menuIds.map((menuId) => (
                        <RestaurantDishListItem key={menuId} id={menuId} />
                    ))}
                </ul>
            ) : (
                <Loader />
            )}

            {status === StoreRequestStatus.REJECTED && <ErrorInfo />}
        </>
    );
};
