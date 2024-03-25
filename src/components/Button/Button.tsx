import React from "react";
import "./Button.styles.scss";

type type = "primary" | "secondary";

interface ButtonBase {
  children: JSX.Element;
  type: type;
  onClick: () => void;
  disabled?: boolean;
}
export const ButtonBase = ({
  children,
  type,
  onClick,
  disabled,
}: ButtonBase) => {
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
