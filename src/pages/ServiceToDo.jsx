import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaRegClock, FaTools, FaCheckCircle } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useTheme from "../hooks/useTheme";

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
  const { user } = useAuth();
  const [bookedServices, setBookedServices] = useState([]);
  const axiosInstance = useAxiosSecure();
  const theme = useTheme();

  useEffect(() => {
    axiosInstance(`/booked/services?provider=${user?.email}`)
      .then((res) => setBookedServices(res.data))
      .catch(() => {});
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
      <div className="min-h-screen py-14 px-4">
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
                    className={`p-6 rounded-xl shadow hover:shadow-lg transition border border-gray-100 ${theme === 'light' ? 'bg-white' : 'text-white bg-[#26313d] border-none'}`}
                  >
                    <div className="flex justify-between items-start">
                      <h2 className={`text-lg font-medium font-p ${theme === 'light' ? 'text-blue-950' : ''}`}>
                        {service.service_Name}
                      </h2>
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${currentStatus?.color}`}
                      >
                        {currentStatus?.icon}
                        {currentStatus?.label}
                      </span>
                    </div>

                    <div className={`text-sm font-o mt-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                      <p>
                        <span className="font-medium">Client Name:</span>{" "}
                        {service?.userName}
                      </p>
                      <p>
                        <span className="font-medium">Client Email:</span>{" "}
                        {service.userEmail}
                      </p>
                      <p>
                        <span className="font-medium">Date Booked:</span>{" "}
                        {service.date}
                      </p>
                    </div>

                    <div className="mt-4">
                      <select
                        value={service.serviceStatus}
                        onChange={(e) => handleStatusChange(e, service._id)}
                        className={`${service.serviceStatus === 'completed' && 'hidden'} w-full rounded-md px-3 py-2 text-sm ${theme === 'light' ? 'focus:outline-none focus:ring-2 focus:ring-[#3CA200] bg-white border border-[#3CA200]' : 'bg-[#1D232A] border border-[#26313D] hover:border hover:border-[#1D232A]'}`}
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
