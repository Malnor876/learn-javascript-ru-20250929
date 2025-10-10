import { Layout } from './Layout';
import './App.scss';
import { RestaurantPage } from './RestaurantPage/RestaurantPage';

export const App = () => {
    return (
        <Layout>
            <RestaurantPage />
        </Layout>
    );
};
