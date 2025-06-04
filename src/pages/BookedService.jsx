import React, { useEffect, useState } from "react";
import UseAuth from "../hooks/useAuth";
import noDataLottie from "../assets/lottieFiles/noDataLottie.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import { FaRegClock, FaTools, FaCheckCircle } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";

const statusStyles = {
  pending: {
    label: "Pending",
    class: "bg-yellow-100 text-yellow-700",
    icon: <FaRegClock className="inline-block mr-1" />,
  },
  working: {
    label: "Working",
    class: "bg-blue-100 text-blue-700",
    icon: <FaTools className="inline-block mr-1" />,
  },
  completed: {
    label: "Completed",
    class: "bg-green-100 text-green-700",
    icon: <FaCheckCircle className="inline-block mr-1" />,
  },
};

const BookedService = () => {
  const { user } = UseAuth();
  const [bookedServices, setBookedServices] = useState([]);
  const axiosInstance = useAxiosSecure()

  useEffect(() => {
    axiosInstance(`/booked/services?user=${user?.email}`)
      .then((res) => setBookedServices(res.data))
      .catch((err) => console.log(err.message));
  }, [user?.email]);

  const hasBookings = bookedServices.length > 0;

  return (
    <>
      <div className="divider"></div>
      <Helmet>
        <title>Booked Services</title>
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 py-10 mb-20">
        <h2 className="text-3xl font-medium text-center mb-10 font-p">
          📋 My Booked Services
        </h2>

        {hasBookings ? (
          <div className="grid gap-6 md:grid-cols-2">
            {bookedServices.map((service) => {
              const status = statusStyles[service.serviceStatus];

              return (
                <div
                  key={service._id}
                  className="bg-white border border-[#3CA200] rounded-xl p-6 shadow hover:shadow-md transition duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-medium font-p text-[#3CA200]">
                      {service.service_Name}
                    </h3>
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full font-o ${status.class}`}
                    >
                      {status.icon}
                      {status.label}
                    </span>
                  </div>

                  <div className="text-gray-700 text-sm space-y-1 font-o">
                    <p>
                      <span className="font-medium">Provider:</span>{" "}
                      {service.providerName}
                    </p>
                    {/* <p>
                      {service.instruction.length > 50
                        ? `${service.instruction.slice(0, 50)}...`
                        : service.instruction}
                    </p> */}
                    <p className="text-sm dark:text-gray-600 font-o">
                      <span className="font-semibold">Instruction : </span>
                      {`${
                        service.instruction.length > 30
                          ? `${service.instruction.slice(0, 40)}...`
                          : service.instruction
                      }`}
                    </p>
                    <p>
                      <span className="font-medium">Booked on:</span>{" "}
                      {service.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-10">
            <p className="text-lg mb-4">
              No services booked yet. Book one to see it here!
            </p>
            <Lottie
              className="w-2/3 md:w-1/3 mx-auto"
              animationData={noDataLottie}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default BookedService;
