import React from "react";
import { PrimaryCheckbox } from "../PrimaryCheckbox/PrimaryCheckbox";
import imgpro from "../../assets/protection-me.svg";
import "./SelectCard.styles.scss";
import { Typography } from "../Typography/Typography";

interface SelectCardInterface {
  image?: string;
  checked: boolean;
  onChange: () => void;
  title: string;
  description: string;
}

export const SelectCard = ({
  image = imgpro,
  description,
  title,
  checked,
  onChange,
}: SelectCardInterface) => {
  return (
    <div className="select-card">
      <div className="select-card__header">
        <PrimaryCheckbox title="" onChange={onChange} checked={checked} />
      </div>
      <div className="select-card__body">
        <div className="select-card__body-title">
          <img src={image} alt="select" />
          <Typography
            color="primary-dark-blue"
            fontFamily="lato"
            weight="black"
            size={18}
            lineHeight={28}
            letterSpacing={-2}
          >
            {title}
          </Typography>
        </div>
        <Typography
          color="primary-dark-blue"
          fontFamily="lato"
          weight="normal"
          size={12}
          lineHeight={20}
          letterSpacing={2}
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};
