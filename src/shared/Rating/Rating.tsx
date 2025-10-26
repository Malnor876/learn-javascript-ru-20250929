import { Icon } from '../Icon/Icon';
import styles from './Rating.module.scss';
import classNames from 'classnames';

interface RatingProps {
    value: number;
    onChange: (value: number) => void;
}
export const Rating = ({ value, onChange }: RatingProps) => {
    return (
        <div className={styles.rating}>
            {Array.from({ length: 5 }, (_, i) => i + 1).map((item, index) => (
                <button
                    key={index}
                    onClick={() => onChange(item)}
                    className={classNames(styles.ratingStar, {
                        [styles.ratingStarActive]: item <= value,
                    })}
                >
                    <Icon icon="star" />
                </button>
            ))}
        </div>
    );
};
