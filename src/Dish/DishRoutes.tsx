import { Route } from 'react-router';
import { DishPage } from './DishPage/DishPage';
export const DishRoutes = () => {
    return <Route path="dish/:id" element={<DishPage />}></Route>;
};
