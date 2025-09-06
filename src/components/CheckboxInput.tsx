import styles from "../styles/checkboxInput.module.css";

type CheckboxInputProps = {
  className?: string;
  name: string;
  disabled?: boolean;
  checked?: boolean;
  handleChange?: () => void;
};

export default function CheckboxInput({className = '', name, disabled, checked, handleChange = () => {}}: CheckboxInputProps) {
  return (
    <input type="checkbox" onChange={handleChange} name={name} className={`${className} ${styles.input}`} disabled={disabled} defaultChecked={checked} />
  );
}