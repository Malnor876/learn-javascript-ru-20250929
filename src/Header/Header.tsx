import { Button } from '@/shared/Button/Button';
import styles from './Header.module.scss';
import { useContext } from 'react';
import { ThemeActionsContext } from '@/ThemeContext/ThemeContext';
import { AuthActionContext, AuthValueContext } from '@/AuthContext/AuthContext';
export const Header = () => {
    const { toggleTheme } = useContext(ThemeActionsContext);
    const name = useContext(AuthValueContext);
    const { login, logout } = useContext(AuthActionContext);
    return (
        <div className={styles.header}>
            <p>Header</p>
            <div className={styles.buttons}>
                <Button
                    label={name ? 'logout' : 'login'}
                    onClick={() => (name ? logout() : login('Pavel'))}
                />
                <Button label="theme" onClick={toggleTheme} />
            </div>
        </div>
    );
};
