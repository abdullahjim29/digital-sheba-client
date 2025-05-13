import { useEffect, useState } from "react";
import UseAuth from "../hooks/useAuth";
import axiosInstance from "../hooks/AxiosInstance";
import ManageServicesCard from "../components/ManageServicesCard";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import noDataLottie from "../assets/lottieFiles/noDataLottie.json";
import Lottie from "lottie-react";

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

  // handle delete
  const handleDelete = (id) => {
    // toast with confirmation
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosInstance.delete(`/services/${id}`).then((res) => {
            toast.success("Service succsessfully deleted!");
          });

          const remainingServices = [...services].filter(
            (service) => service._id !== id
          );
          setServices(remainingServices);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  console.log(services);
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center mt-10">
        Manage Your Services
      </h1>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Here you can edit or delete the services you’ve added.
      </p>

      {services.length || (
        <div className="my-10 flex flex-col items-center">
          <Lottie className="w-2/4" animationData={noDataLottie}></Lottie>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service) => (
          <ManageServicesCard
            key={service._id}
            service={service}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
