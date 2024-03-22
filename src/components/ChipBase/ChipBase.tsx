import React from "react";

interface ChipBaseInterface {
  children: JSX.Element;
  // color: string;
}
export const ChipBase = ({ children }: ChipBaseInterface) => {
  return <div className={""}> {children} </div>;
};
