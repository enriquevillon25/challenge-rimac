import axios from "axios";
import { BASE_URL } from "./api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
