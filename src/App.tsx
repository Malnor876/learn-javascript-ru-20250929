import { AuthProvider } from './AuthContext/AuthProvider';
import { Layout } from './Layout/Layout';
import { RestaurantPage } from './RestaurantPage/RestaurantPage';
import { store } from './store/store';
import { ThemeProvider } from './ThemeContext/ThemeProvider';
import { Provider } from 'react-redux';

export const App = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <ThemeProvider defaultTheme="dark">
                    <Layout>
                        <RestaurantPage />
                    </Layout>
                </ThemeProvider>
            </AuthProvider>
        </Provider>
    );
};
