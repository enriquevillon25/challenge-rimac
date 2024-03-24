import React from "react";
import logo from "../../assets/rimac-logo-footer.svg";
import { Typography } from "../Typography/Typography";
import "./Footer.styles.scss";
export const Footer = () => {
  return (
    <div className="footer__container">
      <img src={logo} />
      <div className="footer__container-info">
        <Typography
          fontFamily="space"
          weight="semi-bold"
         size={12}
          lineHeight={16}
          letterSpacing={2}
          color="white"
        >
          © 2023 RIMAC Seguros y Reaseguros.
        </Typography>
      </div>
    </div>
  );
};
