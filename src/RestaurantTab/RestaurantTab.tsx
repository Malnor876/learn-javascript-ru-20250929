import './RestaurantTab.scss';
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
            className={
                'restaurant-tab ' + (active ? 'restaurant-tab_active' : '')
            }
        >
            {name}
        </button>
    );
};
