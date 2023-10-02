import { ReactNode } from "react";
// styles
import "./Button.scss";

interface ButtonProps {
  type?: "submit";
  customStyles?: string;
  children: ReactNode;
  borderType: "round" | "default"; // round, default
  backgroundType: "fill" | "outline"; // fill, outline
  colorType: "primary" | "secondary" | "success" | "danger" | "disable"; // primary, secondary, success, danger, disable
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  type,
  customStyles,
  children,
  borderType,
  backgroundType,
  colorType,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${customStyles} btn ${borderType} ${backgroundType} ${disabled ? "disable" : colorType}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
