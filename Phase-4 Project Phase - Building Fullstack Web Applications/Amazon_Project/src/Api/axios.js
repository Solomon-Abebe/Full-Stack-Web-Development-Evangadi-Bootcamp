import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/project-63251/us-central1/api",
  baseURL: "https://amazon-api-9x9n.onrender.com/",
});

export { axiosInstance };