import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PlanService } from "../services/PlanService";
import { PlanInterface } from "../interfaces/Plan";

export const useQuotation = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState<PlanInterface[]>([]);

  const routeQuotation = () => {
    navigate("/cotizacion");
  };

  const getAllPlans = useCallback(async () => {
    const planService = new PlanService();
    const response = await planService.getAll();
    setPlans(
      response.list.map((data: PlanInterface, index: number) => ({
        ...data,
        id: String(index + 1),
      }))
    );
  }, []);

  return { routeQuotation, getAllPlans, plans };
};
