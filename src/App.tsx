import { useState } from 'react';
import { Layout } from './Layout';
import { restaurants } from './mocks/restaurant.mock';
import { RestaurantTab } from './RestaurantTab/RestaurantTab';
import './App.scss';
import type { Restaurant } from './types';
import { RestaurantMenu } from './RestaurantMenu/RestaurantMenu';
import { RestaurantReview } from './RestaurantReview/RestaurantReview';

export const App = () => {
    const [activeRestaurant, setActiveRestaurant] = useState<Restaurant | null>(
        restaurants[0]
    );
    return (
        <Layout>
            <>
                <div className="restaurants-tabs">
                    {restaurants.map((restaurant) => {
                        return (
                            <RestaurantTab
                                name={restaurant.name}
                                key={restaurant.id}
                                active={
                                    restaurant.name === activeRestaurant?.name
                                }
                                onClick={() => setActiveRestaurant(restaurant)}
                            ></RestaurantTab>
                        );
                    })}
                </div>
                {activeRestaurant && (
                    <>
                        <h2>{activeRestaurant.name}</h2>
                        <h3>Меню</h3>
                        <ul>
                            {activeRestaurant.menu.map((menu) => (
                                <RestaurantMenu key={menu.id} menu={menu} />
                            ))}
                        </ul>
                        <h3>Отзывы</h3>
                        <ul>
                            {activeRestaurant.reviews.map((review) => (
                                <RestaurantReview
                                    key={review.id}
                                    review={review}
                                />
                            ))}
                        </ul>
                    </>
                )}
            </>
        </Layout>
    );
};
