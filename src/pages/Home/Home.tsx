import { useEffect } from "react";
import "./Home.styles.scss";
import { Typography } from "../../components/Typography/Typography";
import { ChipBase } from "../../components/ChipBase/ChipBase";
import { InputBase } from "../../components/InputBase/InputBase";
import { Button } from "../../components/Button/Button";
import ImageHome from "../../assets/home-image.svg";
import { PrimarySelect } from "../../components/PrimarySelect/PrimarySelect";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useMobile } from "../../hooks/useMobile";

export const Home = () => {
  const optionTypeDoc = [
    { id: 1, value: "DNI", name: "DNI" },
    { id: 2, value: "CE", name: "CE" },
  ];
  const navigate = useNavigate();

  const { user, setUser, getUser } = useUser();
  const { isMobile } = useMobile();
  const {
    comunicationPolicit,
    handleComunicationPolitic,
    handlePrivatePolitic,
    handleTypeDoc,
    handleSetPhone,
    handleNumDoc,
    privatePolitic,
    phone,
    numDoc,
    validationForm,
    typeDoc,
    formToUser,
  } = useForm();

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="home">
      <div className="home__image">
        <img src={ImageHome} alt="home" />
      </div>
      <div className="home__title">
        <ChipBase>
          <Typography
            fontFamily="space"
            size={isMobile ? 12 : 14}
            lineHeight={16}
            letterSpacing={4}
            weight="bold"
            color="primary-black"
          >
            Seguro Salud Flexible
          </Typography>
        </ChipBase>
        <Typography
          fontFamily="space"
          size={isMobile ? 28 : 32}
          weight="bold"
          lineHeight={isMobile ? 36 : 40}
        >
          Creado para ti y tu familia
        </Typography>
      </div>
      <div className="home__main">
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
        <form action="" className="home__main-form">
          <div className="home__main-form-select">
            <PrimarySelect
              options={optionTypeDoc}
              value={typeDoc}
              onChange={handleTypeDoc}
            />
            <InputBase
              value={numDoc !== 0 ? numDoc : ""}
              onChange={handleNumDoc}
              type="right"
              placeHolder="Nro. de documento"
            />
          </div>
          <InputBase
            value={phone !== 0 ? phone : ""}
            onChange={handleSetPhone}
            type="full"
            placeHolder="Celular"
          />
          <div className="home__main-form-politics">
            <div className="home__main-form-politics-check">
              <input
                type="checkbox"
                checked={privatePolitic}
                onChange={handlePrivatePolitic}
                className="checkbox"
              />
              <Typography
                fontFamily="space"
                weight="normal"
                size={isMobile ? 14 : 12}
                lineHeight={20}
                letterSpacing={1}
              >
                Acepto la Política de Privacidad
              </Typography>
            </div>
            <div className="home__main-form-politics-check">
              <input
                type="checkbox"
                checked={comunicationPolicit}
                onChange={handleComunicationPolitic}
                className="checkbox"
              />
              <Typography
                fontFamily="space"
                weight="normal"
                size={isMobile ? 14 : 12}
                lineHeight={20}
                letterSpacing={1}
              >
                Acepto la Política Comunicaciones Comerciales
              </Typography>
            </div>
            <Typography
              fontFamily="space"
              weight="semi-bold"
              size={isMobile ? 14 : 12}
              lineHeight={20}
              letterSpacing={1}
              underlined={true}
            >
              Aplican Términos y Condiciones.
            </Typography>
          </div>
        </form>
        <div>
          <Button
            type="secondary"
            onClick={() => {
              setUser(formToUser(user));
              navigate("/cotizacion");
            }}
            disabled={validationForm}
          >
            <Typography
              color="white"
              weight="bold"
              size={20}
              lineHeight={24}
              letterSpacing={4}
              fontFamily="space"
            >
              Cotiza aquí
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};
