import React from "react";
import { useNavigate } from "react-router-dom";

export const useQuotation = () => {
  const navigate = useNavigate();
  const routeQuotation = () => {
    navigate("/cotizacion", { replace: true });
  };

  return { routeQuotation };
};
