import React from "react";
import logo from "../../assets/rimac-logo-footer.svg";
import logoMobile from "../../assets/logo-footer-mobile.svg";
import { Typography } from "../Typography/Typography";
import "./Footer.styles.scss";
import { useMobile } from "../../hooks/useMobile";
export const Footer = () => {
  const { isMobile } = useMobile();
  return (
    <footer className="footer__container">
      <div>
        <img src={isMobile ? logoMobile : logo} alt="logo" />
      </div>
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
    </footer>
  );
};
