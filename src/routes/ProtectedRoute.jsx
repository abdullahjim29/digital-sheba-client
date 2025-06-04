import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loader from "../assets/lottieFiles/loaderLottie.json";
import Lottie from "lottie-react";

const ProtectedRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="flex justify-center items-center"><Lottie className="w-1/6" animationData={loader}></Lottie></div>
  } else if (user) {
    return children;
  }
  return <Navigate to={`/login`} state={location.pathname}>

  </Navigate>;
};

export default ProtectedRoute;
