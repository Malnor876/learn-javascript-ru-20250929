import { ThemeContext, ThemeActionsContext } from './ThemeContext';
import React, { useCallback, useMemo, useState } from 'react';

interface ThemeProviderProps {
    defaultTheme: 'dark' | 'light';
    children: React.ReactNode;
}
interface ThemeActionProviderProps {
    children: React.ReactNode;
    setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}
const ThemeValueProvider = ({
    theme,
    children,
}: {
    theme: string;
    children: React.ReactNode;
}) => {
    return <ThemeContext value={theme}>{children}</ThemeContext>;
};
const ThemeActionProvider = ({
    setTheme,
    children,
}: ThemeActionProviderProps) => {
    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, [setTheme]);
    const value = useMemo(() => ({ toggleTheme }), [toggleTheme]);
    return <ThemeActionsContext value={value}>{children}</ThemeActionsContext>;
};
export const ThemeProvider = ({
    defaultTheme,
    children,
}: ThemeProviderProps) => {
    const [theme, setTheme] = useState(defaultTheme);
    return (
        <ThemeValueProvider theme={theme}>
            <ThemeActionProvider setTheme={setTheme}>
                {children}
            </ThemeActionProvider>
        </ThemeValueProvider>
    );
};
