import React from "react";
import "./BaseCard.styles.scss";
import { Typography } from "../Typography/Typography";
import { UserInterface } from "../../interfaces/User";
import FamilyIcon from "../../assets/icons/family-icon.svg";
interface CardBase {
  // children: JSX.Element;
  name: string;
  lastName: string;
  doc: {
    type: string;
    num: number;
  };
  phone: number;
  pricePlan: number;
  namePlan: string;
}

export const BaseCard = ({
  name,
  lastName,
  doc,
  phone,
  namePlan,
  pricePlan,
}: CardBase) => {
  return (
    <div className="base-card">
      <div className="base-card__header">
        <Typography
          weight="black"
          size={10}
          lineHeight={16}
          letterSpacing={8}
          color="primary-dark-blue"
        >
          PRECIOS CALCULADOS PARA:
        </Typography>
        <div style={{ display: "flex", gap: "8px" }}>
          <img src={FamilyIcon} />
          <Typography
            weight="bold"
            size={20}
            lineHeight={28}
            letterSpacing={-2}
            color="primary-dark-blue"
          >
            {`${name} ${lastName}`}
          </Typography>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          weight="bold"
          size={20}
          lineHeight={28}
          letterSpacing={-2}
          color="primary-dark-blue"
        >
          Responsable de pago
        </Typography>
        <Typography
          weight="normal"
          size={14}
          lineHeight={24}
          letterSpacing={1}
          color="primary-dark-blue"
        >
          {`${doc.type}: ${doc.num}`}
        </Typography>
        <Typography
          weight="normal"
          size={14}
          lineHeight={24}
          letterSpacing={1}
          color="primary-dark-blue"
        >
          {`Celular: ${phone}`}
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          weight="bold"
          size={20}
          lineHeight={28}
          letterSpacing={-2}
          color="primary-dark-blue"
        >
          Plan elegido
        </Typography>
        <Typography
          weight="normal"
          size={14}
          lineHeight={24}
          letterSpacing={1}
          color="primary-dark-blue"
        >
          {namePlan}
        </Typography>
        <Typography
          weight="normal"
          size={14}
          lineHeight={24}
          letterSpacing={1}
          color="primary-dark-blue"
        >
          {`Costo del Plan: $${pricePlan} al mes`}
        </Typography>
      </div>
    </div>
  );
};
