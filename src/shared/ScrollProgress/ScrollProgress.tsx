import { useEffect, useState } from 'react';
import styles from './ScrollProgress.module.scss';
export const ScrollProgress = () => {
    const [scrollProgressPercent, setScrollProgressPercent] = useState(0);
    useEffect(() => {
        const scrollProgress = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.body.scrollHeight;
            const clientHeight = window.innerHeight;
            setScrollProgressPercent(
                (scrollTop / (scrollHeight - clientHeight)) * 100
            );
        };
        document.addEventListener('scroll', scrollProgress);
        return () => document.removeEventListener('scroll', scrollProgress);
    }, []);
    return (
        <div
            className={styles.scrollProgress}
            style={{ width: `${scrollProgressPercent}%` }}
        ></div>
    );
};
