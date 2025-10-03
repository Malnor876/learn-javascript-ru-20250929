import { createRoot } from 'react-dom/client';
import './index.scss';
import { restaurants } from './mocks/restaurant.mock';
const root = createRoot(document.getElementById('root')!);

root.render(
    <div className="restaurants-list">
        {restaurants.map((restaurant) => {
            return (
                <div>
                    <h2>{restaurant.name}</h2>
                    <h3>Меню</h3>
                    <ul>
                        {restaurant.menu.map((menu) => (
                            <li>{menu.name}</li>
                        ))}
                    </ul>
                    <h3>Отзывы</h3>
                    <ul>
                        {restaurant.reviews.map((review) => (
                            <li>{review.text}</li>
                        ))}
                    </ul>
                </div>
            );
        })}
    </div>
);
