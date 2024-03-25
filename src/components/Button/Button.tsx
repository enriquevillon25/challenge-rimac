import React from "react";
import "./Button.styles.scss";

type type = "primary" | "secondary";

interface ButtonInterface {
  children: JSX.Element;
  type: type;
  onClick: () => void;
  disabled?: boolean;
}
export const Button = ({
  children,
  type,
  onClick,
  disabled,
}: ButtonInterface) => {
  return (
    <button
      onClick={onClick}
      className={`button button--type-${type}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
