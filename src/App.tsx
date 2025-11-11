import { AuthProvider } from './AuthContext/AuthProvider';
import { router } from './router/router';
import { store } from './store/store';
import { ThemeProvider } from './ThemeContext/ThemeProvider';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router/dom';

export const App = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <ThemeProvider defaultTheme="dark">
                    <RouterProvider router={router} />
                </ThemeProvider>
            </AuthProvider>
        </Provider>
    );
};
