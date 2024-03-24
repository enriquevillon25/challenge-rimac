import React from "react";
import "./BaseCard.styles.scss";

interface CardBaseInterface {
  children: JSX.Element;
}

export const BaseCard = ({ children }: CardBaseInterface) => {
  return <div className="base-card">{children}</div>;
};
