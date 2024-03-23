import React from "react";
import "./PrimarySelect.styles.scss";

interface PrimarySelect {
  options: any[];
}

export const PrimarySelect = ({ options }: PrimarySelect) => {
  return (
    <select className={`primary-select`}>
      {options.map((option: any) => (
        <option
          className={`primary-select__option`}
          value={option.value}
          key={option.id}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};
