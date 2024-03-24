import React from "react";
import "./Button.styles.scss";

type type = "primary" | "secondary";

interface ButtonBase {
  children: JSX.Element;
  type: type;
  onClick: () => void;
}
export const ButtonBase = ({ children, type, onClick }: ButtonBase) => {
  return (
    <button
      onClick={onClick}
      className={`button button--type-${type}`}
    >
      {children}
    </button>
  );
};
