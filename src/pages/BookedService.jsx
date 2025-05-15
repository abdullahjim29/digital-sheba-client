import React, { useEffect, useState } from "react";
import UseAuth from "../hooks/useAuth";
import axiosInstance from "../hooks/AxiosInstance";
import noDataLottie from "../assets/lottieFiles/noDataLottie.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const BookedService = () => {
  const { user } = UseAuth();
  const [bookedServices, setBookedServices] = useState([]);

  useEffect(() => {
    axiosInstance(`/booked/services?user=${user?.email}`)
    .then(res => {
        setBookedServices(res.data)
    })
    .catch(err => {
        console.log(err.message);
    })
  }, [user?.email]);


  const hasBookings = bookedServices.length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Helmet>
        <title>Booked-Service</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-8">Booked Services</h2>

      {hasBookings ? (
        <div className="space-y-6">
          {bookedServices.map((service) => (
            <div
              key={service._id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white border-l-4 border-indigo-500 shadow rounded-md p-5"
            >
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700">
                  {service.service_Name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-medium">Provider:</span>{" "}
                  {service.providerName}
                </p>
                <p className="text-gray-700 mt-2">{service.instruction.slice(0, 30)}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Booked on:</span>{" "}
                  {service.date}
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
              <p className="text-sm text-gray-600 mt-1">
                  <button className={`px-3 py-1 rounded-full text-sm font-medium ${service.serviceStatus === 'pending' && 'bg-yellow-100 text-yellow-700'} ${service.serviceStatus === 'working' && 'bg-blue-100	text-blue-700'} ${service.serviceStatus === 'completed' && 'bg-green-100	text-green-700'}`}>{service.serviceStatus}</button>
                </p>
                {/*  */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg">
          No services booked yet. Book one to see it here!
          <div className="my-10 flex flex-col items-center">
          <Lottie className="w-2/4" animationData={noDataLottie}></Lottie>
        </div>
        </div>
      )}
    </div>
  );
};

export default BookedService;
