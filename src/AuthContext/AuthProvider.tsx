import { useCallback, useMemo, useState } from 'react';
import { AuthActionContext, AuthValueContext } from './AuthContext';

const AuthValueProvider = ({
    name,
    children,
}: {
    name: string | undefined;
    children: React.ReactNode;
}) => {
    return <AuthValueContext value={name}>{children}</AuthValueContext>;
};
const AuthActionProvider = ({
    setName,
    children,
}: {
    setName: React.Dispatch<React.SetStateAction<string | undefined>>;
    children: React.ReactNode;
}) => {
    const login = useCallback(
        (name: string) => {
            setName(name);
        },
        [setName]
    );
    const logout = useCallback(() => {
        setName(undefined);
    }, [setName]);
    const actions = useMemo(
        () => ({
            login,
            logout,
        }),
        [login, logout]
    );
    return <AuthActionContext value={actions}>{children}</AuthActionContext>;
};
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [name, setName] = useState<string | undefined>(undefined);
    return (
        <AuthValueProvider name={name}>
            <AuthActionProvider setName={setName}>
                {children}
            </AuthActionProvider>
        </AuthValueProvider>
    );
};
