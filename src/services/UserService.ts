import { axiosInstance } from "../api/axiosInstance";
import { UserInterface } from "../interfaces/User";
import { IUser } from "./interfaces/IUser";

export class UserService implements IUser {
  path = "user.json";

  async getUser(): Promise<UserInterface> {
    try {
      const response = await axiosInstance.get<UserInterface>(this.path);
      return response.data;
    } catch (e) {
      throw new Error("Error de usuario");
    }
  }
}
