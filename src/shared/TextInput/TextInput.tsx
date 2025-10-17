import classNames from 'classnames';
import styles from './TextInput.module.scss';
interface TextInputProps {
    value: string;
    label: string;
    onChange: (value: string) => void;
}
export const TextInput = ({ value, label, onChange }: TextInputProps) => {
    return (
        <div
            className={classNames('float-label', styles.inputText, {
                [styles.inputTextFilled]: value,
            })}
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
