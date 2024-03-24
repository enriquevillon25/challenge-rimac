import React from "react";
import "./PrimaryCheckbox.styles.scss";

export const PrimaryCheckbox = ({ title }: any) => {
  return (
    <label className="container">
      {title}
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};
