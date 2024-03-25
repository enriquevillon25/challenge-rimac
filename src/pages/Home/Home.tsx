import { useEffect } from "react";
import "./Home.styles.scss";
import { Typography } from "../../components/Typography/Typography";
import { ChipBase } from "../../components/ChipBase/ChipBase";
import { InputBase } from "../../components/InputBase/InputBase";
import { ButtonBase } from "../../components/Button/Button";
import ImageHome from "../../assets/home-image.svg";
import { PrimarySelect } from "../../components/PrimarySelect/PrimarySelect";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const Home = () => {
  const optionTypeDoc = [
    { id: 1, value: "DNI", name: "DNI" },
    { id: 2, value: "CE", name: "CE" },
  ];
  const navigate = useNavigate();

  const { user, setUser, getUser } = useUser();

  const {
    comunicationPolicit,
    handleComunicationPolitic,
    handlePrivatePolitic,
    handleTypeDoc,
    privatePolitic,
    phone,
    numDoc,
    setNumDoc,
    setPhone,
    validationForm,
    typeDoc,
    formToUser,
  } = useForm();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="home">
      <div className="home__image">
        <img src={ImageHome} alt="home" />
      </div>
      <div className="home__title">
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
        <Typography fontFamily="space" size={32} weight="bold" lineHeight={40}>
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
          <div
            style={{ display: "grid", gridTemplateColumns: "40% 60%" }}
            className="form__select"
          >
            <PrimarySelect
              options={optionTypeDoc}
              value={typeDoc}
              onChange={handleTypeDoc}
            />
            <InputBase
              value={numDoc !== 0 ? numDoc : ""}
              onChange={(e: any) => {
                setNumDoc(e.target.value);
              }}
              type="right"
              placeHolder="Nro. de documento"
            />
          </div>
          <InputBase
            value={phone !== 0 ? phone : ""}
            onChange={(e: any) => {
              setPhone(e.target.value);
            }}
            type="full"
            placeHolder="Celular"
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <input
                type="checkbox"
                checked={privatePolitic}
                onChange={handlePrivatePolitic}
                className="checkbox"
              />
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
            <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <input
                type="checkbox"
                checked={comunicationPolicit}
                onChange={handleComunicationPolitic}
                className="checkbox"
              />
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
              underlined={true}
            >
              Aplican Términos y Condiciones.
            </Typography>
          </div>
        </form>
        <div>
          <ButtonBase
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
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};
