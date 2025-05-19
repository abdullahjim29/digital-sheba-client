import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/useAuth';
import axiosInstance from '../hooks/AxiosInstance';

const ServiceToDo = () => {
    const {user} = UseAuth();
    const [bookedServices, setBookedServices] = useState([]);
  
    useEffect(() => {
        axiosInstance(`/booked/services?provider=${user?.email}`)
        .then(res => {
            setBookedServices(res.data)
        })
        .catch(err => console.log(err))

    }, [user?.email])

    console.log(bookedServices);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Service To Do</h1>

      {bookedServices.length === 0 ? (
        <p className="text-gray-500 text-center">No booked services found.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-[#FFEDEB] text-left text-sm font-semibold text-gray-700">
              <tr>
                <th className="px-4 py-3 border-b">Service Name</th>
                <th className="px-4 py-3 border-b">Client Email</th>
                <th className="px-4 py-3 border-b">Date Booked</th>
                <th className="px-4 py-3 border-b">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {bookedServices.map((service) => (
                <tr key={service.id} className="hover:bg-[#FFEDEB]">
                  <td className="px-4 py-3 border-b">{service.service_Name}</td>
                  <td className="px-4 py-3 border-b">{service.userEmail}</td>
                  <td className="px-4 py-3 border-b">{service.date}</td>
                  <td className="px-4 py-3 border-b">
                    <select
                      
                      className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="pending">Pending</option>
                      <option value="working">Working</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ServiceToDo;