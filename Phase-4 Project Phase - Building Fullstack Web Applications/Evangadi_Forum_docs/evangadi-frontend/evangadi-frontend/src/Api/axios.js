import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4400/api",
});
export default axiosInstance;
