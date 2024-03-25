import React from "react";
import { Typography } from "../Typography/Typography";
import "./ActionCard.styles.scss";
import homePlan from "../../assets/plan-home.svg";
import { Button } from "../Button/Button";

interface ActionCardInterface {
  descriptions: string[];
  price: number;
  onClick: () => void;
}
export const ActionCard = ({
  descriptions,
  price,
  onClick,
}: ActionCardInterface) => {
  return (
    <div className="action-card">
      <div className="action-card__header">
        <div className="action-card__header-title">
          <Typography
            size={24}
            lineHeight={32}
            color="primary-dark-blue"
            weight="black"
            letterSpacing={-2}
            fontFamily="lato"
          >
            Plan en Casa
          </Typography>
          <img src={homePlan} alt="home-img" />
        </div>
        <div className="action-card__header-price">
          <Typography
            size={12}
            lineHeight={16}
            color="primary-dark-blue"
            weight="black"
            letterSpacing={6}
            fontFamily="lato"
          >
            COSTO DEL PLAN
          </Typography>
          <Typography
            size={20}
            lineHeight={28}
            color="primary-dark-blue"
            weight="black"
            letterSpacing={-2}
            fontFamily="lato"
          >
            {`$${price} al mes`}
          </Typography>
        </div>
      </div>
      <div className="action-card__body">
        <div className="action-card__body-info">
          <ul>
            {descriptions &&
              descriptions.map((description: any, index: number) => (
                <li key={index}>
                  <Typography
                    size={16}
                    lineHeight={28}
                    color="primary-dark-blue"
                    weight="normal"
                    letterSpacing={1}
                    fontFamily="lato"
                  >
                    {description}
                  </Typography>
                </li>
              ))}
          </ul>
        </div>
        <div className="action-card__body-actions">
          <Button type="primary" onClick={onClick}>
            <Typography
              color="white"
              weight="bold"
              size={18}
              lineHeight={20}
              letterSpacing={4}
            >
              Seleccionar Plan
            </Typography>
          </Button>
        </div>
      </div>
      {/* <div className="action-card__actions"></div> */}
    </div>
  );
};
