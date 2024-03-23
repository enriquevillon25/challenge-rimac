import React from "react";
import "./ChipBase.scss";
interface ChipBaseInterface {
  children: JSX.Element;
  // color: string;
}
export const ChipBase = ({ children }: ChipBaseInterface) => {
  return <div className="chip-base"> {children} </div>;
};
