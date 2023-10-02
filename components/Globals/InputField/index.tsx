import { ChangeEvent } from "react";
// styles
import styles from "./InputField.module.scss";
// helper functions
import { validateInput } from "@/services/inputValidations";

interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  label: string;
  errorLabel: string;
  value: string;
  dispatch: (arg: any) => void;
  onChange: (name: string, value: string) => void;
  errorLabelIsActive: boolean;
  maxLength?: number;
}

const InputField = ({
  name,
  type,
  placeholder,
  label,
  errorLabel,
  value,
  onChange,
  dispatch,
  errorLabelIsActive,
  maxLength,
}: InputFieldProps) => {
  const handleInputValidation = () => {
    validateInput(name, value, dispatch);
  };

  return (
    <div className={styles.inputField}>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(name, e.target.value)
        }
        onBlur={handleInputValidation}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        className={errorLabelIsActive ? styles.error : ""}
      />
      {errorLabelIsActive && (
        <label className={styles.errorLabel}>{errorLabel}</label>
      )}
    </div>
  );
};

export default InputField;
