import React from "react";
import "./PrimarySelect.styles.scss";

interface PrimarySelect {
  options: any[];
  value: any;
  onChange: (e: any) => void;
}

export const PrimarySelect = ({ options, value, onChange }: PrimarySelect) => {
  return (
    <select className={`primary-select`} value={value} onChange={onChange}>
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
