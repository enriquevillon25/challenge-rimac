import React from "react";
import "./PrimaryCheckbox.styles.scss";

interface PrimaryCheckboxInterface {
  title: string | JSX.Element;
  onChange: () => any;
  checked: boolean;
}

export const PrimaryCheckbox = ({
  title,
  onChange,
  checked,
}: PrimaryCheckboxInterface) => {
  return (
    <label className="container">
      {title}
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className="checkmark"></span>
    </label>
  );
};
