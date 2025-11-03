import { BrowserRouter, Route, Routes } from 'react-router';
import { AuthProvider } from './AuthContext/AuthProvider';
import { Layout } from './Layout/Layout';
import { store } from './store/store';
import { ThemeProvider } from './ThemeContext/ThemeProvider';
import { Provider } from 'react-redux';
import { RestaurantRoutes } from './Restaraunt/RestarauntRoutes';
import { DishRoutes } from './Dish/DishRoutes';

export const App = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <ThemeProvider defaultTheme="dark">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                {RestaurantRoutes()}
                                {DishRoutes()}
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </AuthProvider>
        </Provider>
    );
};
