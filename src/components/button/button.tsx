import type { FC } from "react";
import type { ButtonProps } from "./button.types";

export const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return <button {...props}>{label}</button>;
};
