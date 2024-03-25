import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlanService } from "../services/PlanService";
import { PlanInterface } from "../interfaces/Plan";

export const useQuotation = () => {
  const navigate = useNavigate();
  const quotation = new PlanService();
  const [plans, setPlans] = useState<PlanInterface[]>([]);

  const routeQuotation = () => {
    navigate("/cotizacion");
  };

  const getAllPlans = async () => {
    const response = await quotation.getAll();
    setPlans(response.list);
  };
  return { routeQuotation, getAllPlans, plans };
};
