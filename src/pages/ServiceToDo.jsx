import React, { useEffect, useState } from "react";
import UseAuth from "../hooks/useAuth";
import axiosInstance from "../hooks/AxiosInstance";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaRegClock, FaTools, FaCheckCircle } from "react-icons/fa";

const statusOptions = [
  {
    value: "pending",
    label: "Pending",
    icon: <FaRegClock />,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    value: "working",
    label: "Working",
    icon: <FaTools />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    value: "completed",
    label: "Completed",
    icon: <FaCheckCircle />,
    color: "bg-green-100 text-green-700",
  },
];

const ServiceToDo = () => {
  const { user } = UseAuth();
  const [bookedServices, setBookedServices] = useState([]);

  useEffect(() => {
    axiosInstance(`/booked/services?provider=${user?.email}`)
      .then((res) => setBookedServices(res.data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  const handleStatusChange = (e, id) => {
    const serviceStatus = e.target.value;
    axiosInstance
      .patch(`/booked-service/update-status/${id}`, { serviceStatus })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Status Updated!");
          setBookedServices((prev) =>
            prev.map((service) =>
              service._id === id ? { ...service, serviceStatus } : service
            )
          );
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <div className="divider"></div>
      <div className="min-h-screen py-10 px-4">
        <Helmet>
          <title>Service To Do</title>
        </Helmet>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-medium mb-8 text-center font-p">
            {" "}
            Services To Do
          </h1>

          {bookedServices.length === 0 ? (
            <p className="text-gray-500 text-center py-10 font-p">
              No booked services found.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {bookedServices.map((service) => {
                const currentStatus = statusOptions.find(
                  (s) => s.value === service.serviceStatus
                );

                return (
                  <div
                    key={service._id}
                    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-gray-100"
                  >
                    <div className="flex justify-between items-start">
                      <h2 className="text-lg font-medium text-[#3CA200] font-p">
                        {service.service_Name}
                      </h2>
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${currentStatus?.color}`}
                      >
                        {currentStatus?.icon}
                        {currentStatus?.label}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-sm text-gray-700 font-o">
                      <p>
                        <span className="font-medium">Client:</span>{" "}
                        {service.userEmail}
                      </p>
                      <p>
                        <span className="font-medium">Date Booked:</span>{" "}
                        {service.date}
                      </p>
                    </div>

                    <div className="mt-4">
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Updated Status : {service.serviceStatus}
                      </label>
                      <select
                        value={service.serviceStatus}
                        onChange={(e) => handleStatusChange(e, service._id)}
                        className="w-full border border-[#3CA200] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3CA200] bg-white text-sm"
                      >
                        {statusOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceToDo;
