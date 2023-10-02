"use client";
import { ChangeEvent } from "react";
// styles
import "./TextareaField.scss";
// helper functions
import { validateInput } from "@/services/inputValidations";

interface TextareaFieldProps {
  name?: string;
  value: string;
  setValue?: (arg: string) => void;
  onChange?: (name: string, value: string) => void;
  isSearchDisabled?: boolean;
  placeholder?: string;
  rows: number;
  dispatch?: (arg: any) => void;
  label?: string;
  errorLabel?: string;
  errorLabelIsActive?: boolean;
  borderType: "round" | "default";
}

const TextareaField = ({
  name,
  value,
  setValue,
  onChange,
  isSearchDisabled,
  placeholder,
  rows,
  dispatch,
  label,
  errorLabel,
  errorLabelIsActive,
  borderType,
}: TextareaFieldProps) => {
  const onSearchValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (name && onChange) {
      onChange(name, e.target.value);
    } else {
      if(setValue) setValue(e.target.value);
    }
  };

  const handleInputValidation = () => {
    if (name && dispatch) validateInput(name, value, dispatch);
  };

  return (
    <div className="textareaField">
      {label && <label>{label}</label>}
      <textarea
        className={borderType}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onSearchValueChange}
        onBlur={handleInputValidation}
        disabled={isSearchDisabled}
      ></textarea>
      {errorLabelIsActive && <label className="errorLabel">{errorLabel}</label>}
    </div>
  );
};

export default TextareaField;
