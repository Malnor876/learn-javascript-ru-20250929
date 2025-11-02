import { Counter } from '@/shared/Counter/Counter';
import {
    addToCart,
    removeFromCart,
    selectAmountById,
} from '@/store/cart.slice';
import { useAppDispatch, useAppSelector } from '@/store/store';
interface DishCounterProps {
    id: string;
    max: number;
}
export const DishCounter = ({ id, max = 100 }: DishCounterProps) => {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => selectAmountById(state, id));
    const handleCounterChange = (action: 'increment' | 'decrement') => {
        if (action === 'increment') {
            if (count < max) {
                dispatch(addToCart(id));
            }
        } else {
            if (count > 0) {
                dispatch(removeFromCart(id));
            }
        }
    };
    return <Counter value={count} onChange={handleCounterChange} />;
};
