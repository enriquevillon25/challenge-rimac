import { useContext } from "react";
import { UserService } from "../services/UserService";
import { UserContext } from "../context/UserContext";

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const userService = new UserService();

  const getUser = async () => {
    const response = await userService.getUser();
    setUser(response);
  };

  const getAgeUser = () => {
    const birthDate = new Date(user.birthDay);
    const dif = Date.now() - birthDate.getTime();
    const age = new Date(dif);
    return Math.abs(age.getUTCFullYear() - 1970);
  };

  return {
    user,
    getAgeUser,
    setUser,
    getUser,
  };
};
