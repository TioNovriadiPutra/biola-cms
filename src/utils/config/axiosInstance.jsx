import axios from "axios";
import { BASE_URL } from "./endpoint";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
  },
});
