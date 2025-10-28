import { createContext } from 'react';

export const ThemeContext = createContext('light');
export const ThemeActionsContext = createContext({ toggleTheme: () => {} });
