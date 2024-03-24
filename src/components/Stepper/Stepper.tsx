import React from "react";
import "./Stepper.styles.scss";

export interface StepInterface {
  id: string;
  title: string;
}

export interface StepperInterface {
  steppers: StepInterface[];
  activeStep: number;
  children: JSX.Element;
}

export const Stepper = ({
  steppers,
  activeStep,
  children,
}: StepperInterface) => {
  return (
    <>
      <div className="stepper">
        {steppers.map((step: StepInterface, index: number) => {
          return (
            <div
              key={step.id}
              className={`stepper__step ${
                activeStep === index && `stepper__step--active`
              }`}
            >
              <div className="stepper__step-circle">{step.id}</div>
              <div className="stepper__step-title">{step.title}</div>
              {index !== steppers.length - 1 && (
                <div className="stepper__step-separator">- - - -</div>
              )}
            </div>
          );
        })}
      </div>
      {children}
    </>
  );
};
