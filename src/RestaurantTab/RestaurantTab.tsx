import classNames from 'classnames';
import styles from './RestaurantTab.module.scss';
export const RestaurantTab = ({
    name,
    active,
    onClick,
}: {
    name: string;
    active: boolean;
    onClick: () => void;
}) => {
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
