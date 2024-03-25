import { createContext, useState } from "react";
import { UserInterface } from "../interfaces/User";

interface UserContextInterface {
  user: UserInterface | undefined;
  // ageUser: number;
}

const defaultValue: UserContextInterface = { user: undefined };
export const UserContext = createContext<any>(defaultValue);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserInterface>({
    birthDay: "",
    lastName: "",
    name: "",
    doc: {
      type: "",
      num: 0,
    },
    phone: 0,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
