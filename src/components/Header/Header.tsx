import React from "react";
import logo from "../../assets/rimac-logo-header.svg";
import phone from "../../assets/icons/phone.svg";
import { Typography } from "../Typography/Typography";
import "./Header.styles.scss";

export const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="header__info">
        <div className="header__info-title">
          <Typography
            fontFamily="space"
            weight="semi-bold"
            size={12}
            lineHeight={16}
            letterSpacing={2}
            color="primary-black"
          >
            ¡Compra por este medio!
          </Typography>
        </div>
        <div className="header__info-contact">
          <img src={phone} alt="phone"/>
          <Typography
            fontFamily="space"
            weight="bold"
            size={16}
            lineHeight={20}
            letterSpacing={4}
            color="primary-black"
          >
            (01) 411 6001
          </Typography>
        </div>
      </div>
    </div>
  );
};
