import React from "react";
import "./InputBase.styles.scss";

interface InputBase<T> {
  value: T;
  placeHolder: string;
  onChange: (e: any) => void;
}

export const InputBase = ({ value, placeHolder, onChange }: InputBase<any>) => {
  return (
    <input
      className="input-base"
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
};
