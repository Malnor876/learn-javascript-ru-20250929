import { createContext } from 'react';

export const AuthValueContext = createContext<string | undefined>(undefined);
export const AuthActionContext = createContext({
    login: (_name: string) => {},
    logout: () => {},
});
