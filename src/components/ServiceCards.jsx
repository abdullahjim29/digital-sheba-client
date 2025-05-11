import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServiceCards = () => {
  const servicesData = useLoaderData();
  const limitedServices = servicesData.data.slice(0, 6);

  return (
    <div className="my-20 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Popular Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-6">
        {limitedServices.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <button className="btn bg-[#FF6B6B] text-white hover:bg-[#E63946] cursor-pointer mt-8"><Link to={'/services'}>Show All</Link></button>
    </div>
  );
};

export default ServiceCards;
