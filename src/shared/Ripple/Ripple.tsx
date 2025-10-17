import React, { useEffect, useRef, useState } from 'react';
import styles from './Ripple.module.scss';

interface RippleStyles {
    width: string;
    height: string;
    left: string;
    top: string;
}
export const Ripple = React.memo(function Ripple() {
    const parentElementRef = useRef<HTMLElement>(null);
    const rippleElementRef = useRef<HTMLSpanElement>(null);
    const [rippleStyles, setRippleStyles] = useState<
        RippleStyles | undefined
    >();
    const onParentClick = (event: PointerEvent) => {
        if (parentElementRef.current && rippleElementRef.current) {
            rippleElementRef.current.classList.remove(styles.rippleActive);
            const diameter = Math.max(
                parentElementRef.current.clientWidth,
                parentElementRef.current.clientHeight
            );
            const radius = diameter / 2;
            const style = { width: '', height: '', left: '', top: '' };
            style.width = style.height = `${diameter}px`;
            style.left = `${event.clientX - (parentElementRef.current.offsetLeft + radius)}px`;
            style.top = `${event.clientY - (parentElementRef.current.offsetTop + radius)}px`;
            setRippleStyles(style);
            rippleElementRef.current.classList.add(styles.rippleActive);
        }
    };
    const handleAnimationEnd = () => {
        setRippleStyles(undefined);
    };
    useEffect(() => {
        const ripple = rippleElementRef.current;
        if (ripple && ripple.parentElement) {
            const parentElement = (parentElementRef.current =
                ripple.parentElement);
            parentElement.style.position = 'relative';
            parentElement.style.overflow = 'hidden';
            parentElement.addEventListener('pointerdown', onParentClick);
            return () => {
                parentElement.removeEventListener('pointerdown', onParentClick);
            };
        }
    }, []);
    return (
        <span
            className={styles.ripple}
            ref={rippleElementRef}
            style={rippleStyles}
            onAnimationEnd={handleAnimationEnd}
        ></span>
    );
});
