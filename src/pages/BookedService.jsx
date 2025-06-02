// import React, { useEffect, useState } from "react";
// import UseAuth from "../hooks/useAuth";
// import axiosInstance from "../hooks/AxiosInstance";
// import noDataLottie from "../assets/lottieFiles/noDataLottie.json";
// import Lottie from "lottie-react";
// import { Helmet } from "react-helmet-async";

// const BookedService = () => {
//   const { user } = UseAuth();
//   const [bookedServices, setBookedServices] = useState([]);

//   useEffect(() => {
//     axiosInstance(`/booked/services?user=${user?.email}`)
//     .then(res => {
//         setBookedServices(res.data)
//     })
//     .catch(err => {
//         console.log(err.message);
//     })
//   }, [user?.email]);


//   const hasBookings = bookedServices.length > 0;

//   return <>
//     <div className="divider"></div>
//     <div className="max-w-4xl mx-auto mb-20 mt-10 px-10">
//       <Helmet>
//         <title>Booked-Service</title>
//       </Helmet>
//       <h2 className="text-3xl font-medium text-center mb-8 font-p">Booked Services</h2>

//       {hasBookings ? (
//         <div className="space-y-6">
//           {bookedServices.map((service) => (
//             <div
//               key={service._id}
//               className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white border-l-4 border-[#3CA200] border shadow-lg rounded-md p-5"
//             >
//               <div>
//                 <h3 className="text-2xl font-semibold text-[#3CA200] font-p">
//                   {service.service_Name}
//                 </h3>
//                 <p className="text-sm text-gray-600 mt-1 font-o">
//                   <span className="font-medium">Provider:</span>{" "}
//                   {service.providerName}
//                 </p>
//                 <p className="text-gray-700 mt-2 font-o">{service.instruction.slice(0, 30)}</p>
//                 <p className="text-sm text-gray-500 font-o">
//                   <span className="font-medium">Booked on:</span>{" "}
//                   {service.date}
//                 </p>
//               </div>
//               <div className="mt-4 md:mt-0 md:text-right font-o">
//               <p className="text-sm text-gray-600 mt-1">
//                   <button className={`px-3 py-1 rounded-full text-sm font-medium ${service.serviceStatus === 'pending' && 'bg-yellow-100 text-yellow-700'} ${service.serviceStatus === 'working' && 'bg-blue-100 text-blue-700'} ${service.serviceStatus === 'completed' && 'bg-green-100	text-green-700'}`}>{service.serviceStatus}</button>
//                 </p>
//                 {/*  */}
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center text-gray-500 text-lg">
//           No services booked yet. Book one to see it here!
//           <div className="my-10 flex flex-col items-center">
//           <Lottie className="w-2/4" animationData={noDataLottie}></Lottie>
//         </div>
//         </div>
//       )}
//     </div>
//   </>
// };

// export default BookedService;


import React, { useEffect, useState } from "react";
import UseAuth from "../hooks/useAuth";
import axiosInstance from "../hooks/AxiosInstance";
import noDataLottie from "../assets/lottieFiles/noDataLottie.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import { FaRegClock, FaTools, FaCheckCircle } from "react-icons/fa";

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
        <h2 className="text-3xl font-medium text-center mb-10 font-p">📋 Booked Services</h2>

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
                    <p>{service.instruction.slice(0, 50)}...</p>
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
            <p className="text-lg mb-4">No services booked yet. Book one to see it here!</p>
            <Lottie className="w-2/3 md:w-1/3 mx-auto" animationData={noDataLottie} />
          </div>
        )}
      </div>
    </>
  );
};

export default BookedService;