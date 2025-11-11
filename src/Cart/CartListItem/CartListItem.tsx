import { selectAmountById } from '@/store/cart.slice';
import { selectDishById } from '@/store/dishes.slice';
import { useAppSelector } from '@/store/store';

export const CartListItem = ({ id }) => {
    const dish = useAppSelector((state) => selectDishById(state, id));
    const amount = useAppSelector((state) => selectAmountById(state, id));
    return (
        <li>
            {dish.name} {amount}
        </li>
    );
};
