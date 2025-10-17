import styles from './Counter.module.scss';
interface CounterProps {
    value: number;
    onChange: (action: 'decrement' | 'increment') => void;
}
export const Counter = ({ value, onChange }: CounterProps) => {
    return (
        <>
            <button
                className={styles.counterButton}
                onClick={(event) => {
                    event.preventDefault();
                    onChange('decrement');
                }}
            >
                -
            </button>
            {value}
            <button
                className={styles.counterButton}
                onClick={(event) => {
                    event.preventDefault();
                    onChange('increment');
                }}
            >
                +
            </button>
        </>
    );
};
