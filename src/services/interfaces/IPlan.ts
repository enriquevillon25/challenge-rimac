import { PlanInterface } from "../../interfaces/Plan";
import { UserInterface } from "../../interfaces/User";

export interface IPlan {
  getAll(): Promise<PlanInterface[]>;
}
