import React from "react";
import { Typography } from "../../components/Typography/Typography";
import { ChipBase } from "../../components/ChipBase/ChipBase";

export const Home = () => {
  return (
    <div>
      <ChipBase>
        <Typography>Seguro Salud Flexible</Typography>
      </ChipBase>
      <Typography fontFamily="space" size="xxl" weight="bold">
        Creado para ti y tu familia
      </Typography>
      <Typography fontFamily="space" size="s" weight="semi-bold">
        Creado para ti y tu familia
      </Typography>
    </div>
  );
};
