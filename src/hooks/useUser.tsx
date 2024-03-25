import { useContext, useCallback } from "react";
import { UserService } from "../services/UserService";
import { UserContext } from "../context/UserContext";

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const getUser = useCallback(async () => {
    const userService = new UserService();
    const response = await userService.getUser();
    setUser(response);
  }, [setUser]);

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
