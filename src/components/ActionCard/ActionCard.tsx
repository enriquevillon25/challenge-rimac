import React from "react";
import { Typography } from "../Typography/Typography";
import "./ActionCard.styles.scss";
import homePlan from "../../assets/plan-home.svg";
import { ButtonBase } from "../Button/Button";

export const ActionCard = () => {
  return (
    <div className="action-card">
      <div className="action-card__header">
        <div className="action-card__header-title">
          <Typography
            size={24}
            lineHeight={32}
            color="primary-blue-dark"
            weight="black"
            letterSpacing={-2}
            fontFamily="lato"
          >
            Plan en Casa
          </Typography>
          <img src={homePlan} />
        </div>
        <div className="action-card__header-price">
          <Typography
            size={12}
            lineHeight={16}
            color="primary-blue-dark"
            weight="black"
            letterSpacing={6}
            fontFamily="lato"
          >
            COSTO DEL PLAN
          </Typography>
          <Typography
            size={20}
            lineHeight={28}
            color="primary-blue-dark"
            weight="black"
            letterSpacing={-2}
            fontFamily="lato"
          >
            $39 al mes
          </Typography>
        </div>
      </div>
      <div className="action-card__body">
        <Typography
          size={16}
          lineHeight={28}
          color="primary-blue-dark"
          weight="normal"
          letterSpacing={1}
          fontFamily="lato"
        >
          Médico general a domicilio por S/20 y medicinas cubiertas al 100%.
        </Typography>
      </div>
      <div className="action-card__actions">
        <ButtonBase
          type="primary"
          onClick={() => console.log("Seleccionar plan")}
        >
          <Typography
            color="white"
            weight="bold"
            size={18}
            lineHeight={20}
            letterSpacing={4}
          >
            Seleccionar Plan
          </Typography>
        </ButtonBase>
      </div>
    </div>
  );
};
