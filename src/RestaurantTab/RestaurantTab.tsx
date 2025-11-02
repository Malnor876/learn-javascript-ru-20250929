import classNames from 'classnames';
import styles from './RestaurantTab.module.scss';
import { selectRestaurantById } from '@/store/restaurants.slice';
import { useAppSelector } from '@/store/store';
export const RestaurantTab = ({
    id,
    active,
    onClick,
}: {
    id: string;
    active: boolean;
    onClick: () => void;
}) => {
    const { name } = useAppSelector((state) => selectRestaurantById(state, id));
    return (
        <button
            onClick={onClick}
            className={classNames(styles.restaurantTab, {
                [styles.restaurantTabActive]: active,
            })}
        >
            {name}
        </button>
    );
};
