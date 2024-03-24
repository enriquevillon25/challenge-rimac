import { ActionCard } from "../../components/ActionCard/ActionCard";
import { BaseCard } from "../../components/BaseCard/BaseCard";
import { SelectCard } from "../../components/SelectCard/SelectCard";
import { StepInterface, Stepper } from "../../components/Stepper/Stepper";
import { Typography } from "../../components/Typography/Typography";

export const QuotationPage = () => {
  const steppers: StepInterface[] = [
    {
      id: "1",
      title: "Planes y coberturas",
    },
    {
      id: "2",
      title: "Resumen",
    },
  ];
  return (
    <div>
      <Stepper activeStep={0} steppers={steppers}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            fontFamily="lato"
            weight="bold"
            size={32}
            color="primary-blue-dark"
            letterSpacing={-6}
            lineHeight={48}
            align="center"
          >
            Rocío ¿Para quién deseas cotizar?
          </Typography>
          <Typography
            fontFamily="lato"
            weight="normal"
            size={16}
            color="primary-blue-dark"
            letterSpacing={1}
            lineHeight={28}
            align="center"
          >
            Selecciona la opción que se ajuste más a tus necesidades.
          </Typography>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "28px" }}
          >
            <SelectCard />
          </div>
          <div>
            <ActionCard></ActionCard>
          </div>
        </div>
      </Stepper>
    </div>
  );
};
