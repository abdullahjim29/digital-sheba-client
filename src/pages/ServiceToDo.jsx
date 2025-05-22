import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/useAuth';
import axiosInstance from '../hooks/AxiosInstance';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

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

    const handleStatusChange = (e, id) => {
      const serviceStatus = e.target.value; 
      
      axiosInstance.patch(`/booked-service/update-status/${id}`, {serviceStatus})
      .then(res => {
        if(res.data. modifiedCount > 0){
          toast.success('Status Updated!')
        }
      })
      .catch(err => toast.error(err.message))
    }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Helmet>
        <title>Service To Do</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Service To Do</h1>

      {bookedServices.length === 0 ? (
        <p className="text-gray-500 text-center">No booked services found.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full bg-white border border-gray-200 cursor-pointer">
            <thead className="bg-[#FFEDEB] text-left text-sm font-semibold text-gray-700">
              <tr>
                <th className="px-4 py-3 border-b">Service Name</th>
                <th className="px-4 py-3 border-b">Client Email</th>
                <th className="px-4 py-3 border-b">Date Booked</th>
                <th className="px-4 py-3 border-b">Update Status</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {bookedServices.map((service) => (
                <tr key={service._id} className="hover:bg-[#FFEDEB]">
                  <td className="px-4 py-3 border-b">{service.service_Name}</td>
                  <td className="px-4 py-3 border-b">{service.userEmail}</td>
                  <td className="px-4 py-3 border-b">{service.date}</td>
                  <td className="px-4 py-3 border-b">
                    <select
                    defaultValue={service.serviceStatus}
                    onChange={(e) => handleStatusChange(e, service._id)}
                      
                      className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>pending</option>
                      <option>working</option>
                      <option>completed</option>
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