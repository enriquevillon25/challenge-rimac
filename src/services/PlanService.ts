import { axiosInstance } from "../api/axiosInstance";
import { PlanInterface } from "../interfaces/Plan";
import { IPlan } from "./interfaces/IPlan";

export class PlanService implements IPlan {
  path = "plans.json";
  async getAll(): Promise<any> {
    try {
      const response = await axiosInstance.get<PlanInterface[]>(this.path);
      return response.data;
    } catch (e) {
      throw new Error("Error en los planes");
    }
  }
}
