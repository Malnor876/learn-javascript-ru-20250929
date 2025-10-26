import './Counter.scss';
interface CounterProps {
    value: number;
    onChange: (action: 'decrement' | 'increment') => void;
}
export const Counter = ({ value, onChange }: CounterProps) => {
    return (
        <>
            <button
                className="counter__button"
                onClick={(event) => {
                    event.preventDefault();
                    onChange('decrement');
                }}
            >
                -
            </button>
            {value}
            <button
                className="counter__button"
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
