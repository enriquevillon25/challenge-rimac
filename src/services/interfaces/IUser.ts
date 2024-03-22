import { UserInterface } from "../../interfaces/User";

export interface IUser {
  getUser(): Promise<UserInterface>;
}
