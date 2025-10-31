import { selectDishById } from '@/store/dishes.slice';
import { useAppSelector } from '@/store/store';

export const CartListItem = ({ id }) => {
    const dish = useAppSelector((state) => selectDishById(state, id));
    return <li>{dish.name}</li>;
};
