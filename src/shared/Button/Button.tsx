import styles from './Button.module.scss';
import { Ripple } from '../Ripple/Ripple';
interface ButtonProps {
    label: string;
    onClick: () => void;
}
export const Button = ({ label, onClick }: ButtonProps) => {
    return (
        <button className={styles.buttonPrimary} onClick={onClick}>
            {label}
            <Ripple />
        </button>
    );
};
