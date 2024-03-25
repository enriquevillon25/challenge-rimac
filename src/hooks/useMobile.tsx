import { useEffect, useState } from "react";

export const useMobile = () => {
  const [isMobile, setIsmobile] = useState<boolean>(false);
  const getMatchMediaIsMobile = (size: any) => {
    return window.matchMedia(size).matches;
  };

  useEffect(() => {
    setIsmobile(getMatchMediaIsMobile("(max-width:768px)"));
  }, []);

  return { isMobile };
};
