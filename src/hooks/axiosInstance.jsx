import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://digital-sheba-gamma.vercel.app",
  withCredentials: true,
});


export default axiosInstance;
