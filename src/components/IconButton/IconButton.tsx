import React from "react";
import "./IconButton.styles.scss";

interface IconButtonInterface {
  children: JSX.Element;
  onClick: () => void;
  title: string | JSX.Element;
}

export const IconButton = ({ children, onClick, title }: IconButtonInterface) => {
  return (
    <button className="icon-button" onClick={onClick}>
      {children}
      {title}
    </button>
  );
};
