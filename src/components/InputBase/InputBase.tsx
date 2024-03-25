import React from "react";
import "./InputBase.styles.scss";

interface InputBase<T> {
  value: T;
  placeHolder: string;
  onChange: (e: any) => void;
  type: string;
}

export const InputBase = ({
  value,
  placeHolder,
  onChange,
  type,
}: InputBase<any>) => {
  return (
    <input
      className={`input-base input-base--${type}`}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
};
