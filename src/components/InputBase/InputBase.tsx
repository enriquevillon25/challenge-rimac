import React from "react";
import "./InputBase.styles.scss";

interface InputBaseInterface {
  value: any;
  placeHolder: string;
  onChange: (e: any) => void;
  type: string;
}

export const InputBase = ({
  value,
  placeHolder,
  onChange,
  type,
}: InputBaseInterface) => {
  return (
    <input
      className={`input-base input-base--${type}`}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
};
