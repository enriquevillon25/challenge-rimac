import React, { useEffect, useState } from "react";

export const useMobile = () => {
  const [isMobile, setIsmobile] = useState<boolean>(false);
  const getMatchIsMobile = (size: any) => {
    return window.matchMedia(size).matches;
  };

  useEffect(() => {
    setIsmobile(getMatchIsMobile("(max-width:768px)"));
  }, []);

  return { isMobile };
};
