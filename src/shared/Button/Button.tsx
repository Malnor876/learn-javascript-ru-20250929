import { useRef, type MouseEventHandler } from 'react';
import styles from './Button.module.scss';
interface ButtonProps {
    label: string;
    onClick: () => void;
}
export const Button = ({ label, onClick }: ButtonProps) => {
    console.log('styles', styles);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const onButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        const rippleEl = document.createElement('span');
        rippleEl.classList.add('ripple');
        if (buttonRef.current) {
            const diameter = Math.max(
                buttonRef.current.clientWidth,
                buttonRef.current.clientHeight
            );
            const radius = diameter / 2;

            rippleEl.style.width = rippleEl.style.height = `${diameter}px`;
            rippleEl.style.left = `${event.clientX - (buttonRef.current.offsetLeft + radius)}px`;
            rippleEl.style.top = `${event.clientY - (buttonRef.current.offsetTop + radius)}px`;
            rippleEl.classList.add(styles.ripple);
            buttonRef.current
                .appendChild(rippleEl)
                .addEventListener('animationend', () => {
                    rippleEl.remove();
                });
        }
        onClick();
    };
    return (
        <button
            ref={buttonRef}
            className={styles.buttonPrimary}
            onClick={onButtonClick}
        >
            {label}
        </button>
    );
};
