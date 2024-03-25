import React from "react";
import "./PrimaryCheckbox.styles.scss";

interface PrimaryCheckbox {
  title: string | JSX.Element;
  onChange: () => any;
  checked: boolean;
}

export const PrimaryCheckbox = ({
  title,
  onChange,
  checked,
}: PrimaryCheckbox) => {
  return (
    <label className="container">
      {title}
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className="checkmark"></span>
    </label>
  );
};
