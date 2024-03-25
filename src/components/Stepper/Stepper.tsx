import React from "react";
import "./Stepper.styles.scss";
import { Typography } from "../Typography/Typography";
import { IconButton } from "../IconButton/IconButton";
import LeftArrowCircle from "../../assets/icons/arrow-left-circle.svg";

export interface StepInterface {
  id: string;
  title: string;
}

export interface StepperInterface {
  steppers: StepInterface[];
  activeStep: number;
  children: JSX.Element[];
  onClick: () => void;
}

export const Stepper = ({
  steppers,
  activeStep,
  children,
  onClick,
}: StepperInterface) => {
  return (
    <>
      <div className="stepper">
        {steppers.map((step: StepInterface, index: number) => {
          return (
            <div
              key={step.id}
              className={`stepper__step ${
                activeStep - 1 === index && `stepper__step--active`
              }`}
            >
              <div className="stepper__step-circle">
                <Typography
                  size={16}
                  lineHeight={16}
                  letterSpacing={4}
                  weight="bold"
                  color="primary-dark-blue"
                >
                  {step.id}
                </Typography>
              </div>
              <div className="stepper__step-title">
                <Typography
                  size={16}
                  lineHeight={24}
                  letterSpacing={2}
                  weight="bold"
                  color="primary-dark-blue"
                >
                  {step.title}
                </Typography>
              </div>
              {index !== steppers.length - 1 && (
                <div className="stepper__step-separator">- - - -</div>
              )}
            </div>
          );
        })}
      </div>
      <div className="stepper__container">
        <IconButton
          onClick={onClick}
          title={
            <Typography
              weight="bold"
              size={18}
              lineHeight={20}
              letterSpacing={4}
              color="violet"
            >
              Volver
            </Typography>
          }
        >
          <img src={LeftArrowCircle} alt="left-arrow" />
        </IconButton>
        {children[activeStep - 1]}
      </div>
    </>
  );
};
