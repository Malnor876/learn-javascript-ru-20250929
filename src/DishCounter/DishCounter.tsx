import { Counter } from '@/shared/Counter/Counter';
interface DishCounterProps {
    value: number;
    max: number;
    onChange: (value: number) => void;
}
export const DishCounter = ({
    value,
    onChange,
    max = 100,
}: DishCounterProps) => {
    const handleCounterChange = (action: 'increment' | 'decrement') => {
        if (action === 'increment') {
            onChange(Math.min(value + 1, max));
        } else {
            onChange(Math.max(value - 1, 0));
        }
    };
    return <Counter value={value} onChange={handleCounterChange} />;
};
