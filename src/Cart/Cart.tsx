import { CartListItem } from '@/CartListItem/CartListItem';
import { selectCartItemsIds } from '@/store/cart.slice';
import { useAppSelector } from '@/store/store';

export function Cart() {
    const cartItems = useAppSelector(selectCartItemsIds);
    return (
        <div className="cart">
            <ul>
                {cartItems &&
                    cartItems.map((id) => <CartListItem key={id} id={id} />)}
            </ul>
        </div>
    );
}
