import { useContext, useEffect, useState } from "react";
import { ActionCard } from "../../components/ActionCard/ActionCard";
import { SelectCard } from "../../components/SelectCard/SelectCard";
import { StepInterface, Stepper } from "../../components/Stepper/Stepper";
import { Typography } from "../../components/Typography/Typography";
import { useQuotation } from "../../hooks/useQuotation";
import { PlanInterface } from "../../interfaces/Plan";
import { UserContext } from "../../context/UserContext";
import "./QuotationPage.styles.scss";
import { BaseCard } from "../../components/BaseCard/BaseCard";
import { useMobile } from "../../hooks/useMobile";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

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

  const coveragesPlans = [
    {
      id: 1,
      title: "Para mi",
      description:
        "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
      type: "me",
      active: false,
    },
    {
      id: 2,
      title: "Para alguien más",
      description:
        "Realiza una cotización para uno de tus familiares o cualquier persona.",
      type: "tercer",
      active: false,
    },
  ];

  const { plans, getAllPlans } = useQuotation();
  const { getAgeUser } = useUser();
  const { user } = useContext(UserContext);
  const [activeStep, setActiveStep] = useState(1);
  const [currentPlan, setCurrentPlan] = useState<PlanInterface>();
  const [activeCoverage, setActiveCoverage] = useState<any>({});
  const { isMobile } = useMobile();

  const navigate = useNavigate();
  useEffect(() => {
    getAllPlans();
  }, [getAllPlans]);

  return (
    <div className="quotation-page">
      <Stepper
        activeStep={activeStep}
        steppers={steppers}
        onClick={() => {
          if (activeStep === 1) {
            navigate("/");
          }
          setActiveStep(activeStep - 1);
        }}
        isMobile={isMobile}
      >
        <div className="quotation-page__plansCove">
          <div className="quotation-page__plansCove-title">
            <Typography
              weight="bold"
              size={isMobile ? 28 : 32}
              color="primary-dark-blue"
              letterSpacing={isMobile ? -2 : -6}
              lineHeight={isMobile ? 36 : 48}
              align={isMobile ? "start" : "center"}
            >
              {`${user && `${user.name} ¿Para quién deseas cotizar?`}`}
            </Typography>
            <Typography
              fontFamily="lato"
              weight="normal"
              size={16}
              color="primary-dark-blue"
              letterSpacing={1}
              lineHeight={28}
              align={isMobile ? "start" : "center"}
            >
              Selecciona la opción que se ajuste más a tus necesidades.
            </Typography>
          </div>
          <div className="quotation-page__plansCove-coverage">
            {coveragesPlans.map((coveragePlan: any) => (
              <SelectCard
                description={coveragePlan.description}
                title={coveragePlan.title}
                key={coveragePlan.id}
                onChange={() => {
                  if (coveragePlan.id === activeCoverage.id) {
                    setActiveCoverage({});
                  } else {
                    setActiveCoverage(coveragePlan);
                  }
                }}
                checked={coveragePlan.id === activeCoverage.id}
              />
            ))}
          </div>
          {activeCoverage.id && (
            <div className="quotation-page__plansCove-plans">
              {plans
                .filter((plan: PlanInterface) => plan.age > getAgeUser())
                .map((plan: PlanInterface) => (
                  <ActionCard
                    key={plan.id}
                    descriptions={plan.description}
                    price={
                      activeCoverage.type === "me"
                        ? plan.price
                        : plan.price * 0.95
                    }
                    onClick={() => {
                      setCurrentPlan({
                        ...plan,
                        price:
                          activeCoverage.type === "me"
                            ? plan.price
                            : plan.price * 0.95,
                      });
                      setActiveStep(activeStep + 1);
                    }}
                  />
                ))}
            </div>
          )}
        </div>

        <div className="quotation-page__summary">
          <Typography
            weight="bold"
            size={isMobile ? 32 : 40}
            lineHeight={isMobile ? 36 : 48}
            letterSpacing={isMobile ? -2 : -6}
            color="primary-dark-blue"
            align={isMobile ? "center" : "start"}
          >
            Resumen del seguro
          </Typography>
          {user && currentPlan && (
            <BaseCard
              name={user.name}
              lastName={user.lastName}
              doc={user.doc}
              phone={user.phone}
              pricePlan={currentPlan.price}
              namePlan={currentPlan.name}
            />
          )}
        </div>
      </Stepper>
    </div>
  );
};
