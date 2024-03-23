import React from "react";
import logo from "../../assets/rimac-logo-header.svg";
import phone from "../../assets/icons/phone.svg";
import { Typography } from "../Typography/Typography";
import "./Header.styles.scss";
export const Header = () => {
  return (
    <div className="header__container">
      <img src={logo} />
      <div className="header__container-info">
        <Typography
          fontFamily="space"
          weight="semi-bold"
          size="s"
          lineHeight={16}
          letterSpacing={2}
          color="primary-black"
        >
          ¡Compra por este medio!
        </Typography>
        <div className="header__container-contact">
          <img src={phone} />
          <Typography
            fontFamily="space"
            weight="bold"
            size="l"
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
