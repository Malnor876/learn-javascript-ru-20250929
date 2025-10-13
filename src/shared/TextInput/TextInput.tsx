import './TextInput.scss';
interface TextInputProps {
    value: string;
    label: string;
    onChange: (value: string) => void;
}
export const TextInput = ({ value, label, onChange }: TextInputProps) => {
    return (
        <div
            className={`float-label input-text ${value ? 'input-text_filled' : ''}`}
        >
            <input
                type="text"
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
            <label>{label}</label>
        </div>
    );
};
