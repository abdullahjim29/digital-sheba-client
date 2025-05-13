import { useEffect, useState } from "react";
import UseAuth from "../hooks/useAuth";
import axiosInstance from "../hooks/AxiosInstance";
import ManageServicesCard from "../components/ManageServicesCard";

const ManageServices = () => {
    const { user } = UseAuth();
    const [services, setServices] = useState([]);

  useEffect(() => {
    axiosInstance(`/services/?email=${user?.email}`)
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email]);

  console.log(services);
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center mt-10">
        Manage Your Services
      </h1>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Here you can edit or delete the services you’ve added.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service) => (
          <ManageServicesCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
