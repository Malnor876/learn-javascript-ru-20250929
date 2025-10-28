import { AuthProvider } from './AuthContext/AuthProvider';
import { Layout } from './Layout/Layout';
import { RestaurantPage } from './RestaurantPage/RestaurantPage';
import { ThemeProvider } from './ThemeContext/ThemeProvider';

export const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider defaultTheme="dark">
                <Layout>
                    <RestaurantPage />
                </Layout>
            </ThemeProvider>
        </AuthProvider>
    );
};
