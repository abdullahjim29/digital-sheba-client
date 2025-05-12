import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllServicesCard from "../components/AllServicesCard";

const Services = () => {
  const servicesData = useLoaderData();
  const [services, setServices] = useState(servicesData.data);

  return (
    <div className="my-10 w-10/12 mx-auto">
      <h2 className="text-3xl font-bold text-center my-5">
        EXPLORE ALL SERVICES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 my-10">
        {services.map(service => <AllServicesCard key={service._id} service={service}/>)}
      </div>
    </div>
  );
};

export default Services;
