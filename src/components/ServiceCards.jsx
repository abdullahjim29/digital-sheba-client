import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServiceCards = () => {
  const servicesData = useLoaderData();

  return (
    <div className="my-20 w-11/12 mx-auto">
      <div className="mb-16 space-y-3 text-center">
        <h3 className="text-md font-medium font-p">POPULAR SERVICES</h3>
        <h2 className="font-p text-2xl md:text-4xl font-medium">
          Here’s What We Can Do for You
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-6">
        {servicesData.data.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      <Link to={"/services"}>
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#F2D701] px-8 font-medium text-black cursor-pointer my-8">
          <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
            Show All
          </div>
          <div className="absolute translate-y-[150%] transition duration-700  group-hover:translate-y-0">
          Show All
          </div>
        </button>
      </Link>
    </div>
  );
};

export default ServiceCards;
