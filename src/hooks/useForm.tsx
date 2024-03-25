import { useState } from "react";
import { UserInterface } from "../interfaces/User";

export const useForm = () => {
  const [numDoc, setNumDoc] = useState<number>(0);
  const [typeDoc, setTypeDoc] = useState<string>("DNI");
  const [phone, setPhone] = useState<number>(0);
  const [privatePolitic, setPrivatePolitic] = useState<boolean>(false);
  const [comunicationPolicit, setComunicationPolitic] =
    useState<boolean>(false);

  const handlePrivatePolitic = (e: any) => {
    setPrivatePolitic(e.target.checked);
  };
  const handleComunicationPolitic = (e: any) => {
    setComunicationPolitic(e.target.checked);
  };
  const handleNumDoc = (e: any) => {
    if (/^\d*$/.test(e.target.value)) {
      setNumDoc(e.target.value);
    } else {
      e.preventDefault();
    }
  };
  const handleTypeDoc = (e: any) => {
    setTypeDoc(e.target.value);
  };
  const handleSetPhone = (e: any) => {
    if (/^\d*$/.test(e.target.value)) {
      setPhone(e.target.value);
    } else {
      e.preventDefault();
    }
  };

  const validationForm =
    !numDoc || !phone || !privatePolitic || !comunicationPolicit;

  const formToUser = (user: UserInterface) => {
    const sendObj = {
      ...user,
      doc: { type: typeDoc, num: numDoc },
      phone: phone,
    };
    return sendObj;
  };

  return {
    privatePolitic,
    comunicationPolicit,
    handlePrivatePolitic,
    handleComunicationPolitic,
    numDoc,
    phone,
    setNumDoc,
    setPhone,
    typeDoc,
    setTypeDoc,
    handleSetPhone,
    handleNumDoc,
    handleTypeDoc,
    validationForm,
    formToUser,
  };
};
