import React from "react";
import "./ButtonBase.styles.scss";

type color = "primary" | "primary-black";

interface ButtonBase {
  children: JSX.Element;
  color: color;
}
export const ButtonBase = ({ children, color }: ButtonBase) => {
  return (
    <button className={`button-base button-base--color-${color}`}>
      {children}
    </button>
  );
};
