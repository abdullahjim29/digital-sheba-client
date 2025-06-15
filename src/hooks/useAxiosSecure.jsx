import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://digital-sheba-gamma.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOutUser } = useAuth()
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          logOutUser()
            .then((res) => {
              navigate("/login");
            })
            .then(() => {});
        }

        return Promise.reject(error);
      }
    );
  }, []);
  return axiosInstance;
};

export default useAxiosSecure;
