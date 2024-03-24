import React from "react";
import { PrimaryCheckbox } from "../PrimaryCheckbox/PrimaryCheckbox";
import { BaseCard } from "../BaseCard/BaseCard";
import imgpro from "../../assets/protection-me.svg";
import "./SelectCard.styles.scss";
import { Typography } from "../Typography/Typography";

export const SelectCard = ({ image = imgpro }: any) => {
  return (
    <div className="select-card">
      <div className="select-card__header">
        <PrimaryCheckbox />
      </div>
      <div className="select-card__body">
        <img src={image} />
        <Typography
          color="primary-blue-dark"
          fontFamily="lato"
          weight="black"
          size={18}
          lineHeight={28}
          letterSpacing={-2}
        >
          Para mi
        </Typography>
        <Typography
          color="primary-blue-dark"
          fontFamily="lato"
          weight="normal"
         size={12}
          lineHeight={20}
          letterSpacing={2}
        >
          Cotiza tu seguro de salud y agrega familiares si así lo deseas.
        </Typography>
      </div>
    </div>
  );
};
