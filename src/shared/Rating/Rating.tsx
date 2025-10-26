import { Icon } from '../Icon/Icon';
import './Rating.scss';

interface RatingProps {
    value: number;
    onChange: (value: number) => void;
}
export const Rating = ({ value, onChange }: RatingProps) => {
    return (
        <div className="rating">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((item, index) => (
                <button
                    key={index}
                    onClick={() => onChange(item)}
                    className={`rating__star ${item <= value ? 'rating__star_active' : ''}`}
                >
                    <Icon icon="star" />
                </button>
            ))}
        </div>
    );
};
