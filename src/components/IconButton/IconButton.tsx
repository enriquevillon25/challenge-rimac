import React from "react";
import "./IconButton.styles.scss";

interface IconButton {
  children: JSX.Element;
  onClick: () => void;
  title: string | JSX.Element;
}

export const IconButton = ({ children, onClick, title }: IconButton) => {
  return (
    <button className="icon-button" onClick={onClick}>
      {children}
      {title}
    </button>
  );
};
