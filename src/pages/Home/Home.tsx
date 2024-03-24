import React, { useState } from "react";
import "./Home.styles.scss";
import { Typography } from "../../components/Typography/Typography";
import { ChipBase } from "../../components/ChipBase/ChipBase";
import { InputBase } from "../../components/InputBase/InputBase";
import { ButtonBase } from "../../components/Button/Button";
import ImageHome from "../../assets/home-image.svg";
import { PrimaryCheckbox } from "../../components/PrimaryCheckbox/PrimaryCheckbox";
import { PrimarySelect } from "../../components/PrimarySelect/PrimarySelect";
import { useQuotation } from "../../hooks/useQuotation";

export const Home = () => {
  const [numDoc, setNumDoc] = useState<number>();
  const [phone, setPhone] = useState<number>();
  const optionTypeDoc = [
    { id: 1, value: "dni", name: "DNI" },
    { id: 2, value: "ce", name: "CE" },
  ];

  const { routeQuotation } = useQuotation();

  return (
    <div className="Home__container">
      <div className="Home__container-image">
        <img src={ImageHome} />
      </div>
      <div className="Home__container-title">
        <ChipBase>
          <Typography
            fontFamily="space"
            size={14}
            lineHeight={16}
            letterSpacing={4}
            weight="bold"
            color="primary-black"
          >
            Seguro Salud Flexible
          </Typography>
        </ChipBase>
        <Typography fontFamily="space" size={18} weight="bold" lineHeight={40}>
          Creado para ti y tu familia
        </Typography>
      </div>
      <div className="Home__container-main">
        <Typography
          fontFamily="space"
          size={14}
          weight="semi-bold"
          letterSpacing={2}
          lineHeight={20}
        >
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría. 100% online.
        </Typography>
        <div style={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
          <PrimarySelect options={optionTypeDoc} />
          <InputBase
            value={numDoc}
            onChange={(e: any) => {
              setNumDoc(e.target.value);
            }}
            placeHolder="Nro. de documento"
          />
        </div>
        <InputBase
          value={phone}
          onChange={(e: any) => {
            setPhone(e.target.value);
          }}
          placeHolder="Celular"
        />
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <PrimaryCheckbox />
          <Typography
            fontFamily="space"
            weight="normal"
            size={12}
            lineHeight={20}
            letterSpacing={1}
          >
            Acepto la Política de Privacidad
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <PrimaryCheckbox />
          <Typography
            fontFamily="space"
            weight="normal"
            size={12}
            lineHeight={20}
            letterSpacing={1}
          >
            Acepto la Política Comunicaciones Comerciales
          </Typography>
        </div>
        <Typography
          fontFamily="space"
          weight="semi-bold"
          size={12}
          lineHeight={20}
          letterSpacing={1}
        >
          Aplican Términos y Condiciones.
        </Typography>

        <ButtonBase type="secondary" onClick={routeQuotation}>
          <Typography
            color="white"
            weight="bold"
            size={18}
            lineHeight={24}
            letterSpacing={4}
          >
            Cotiza aquí
          </Typography>
        </ButtonBase>
      </div>
    </div>
  );
};
