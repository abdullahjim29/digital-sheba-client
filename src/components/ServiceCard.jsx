import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {service: serviceName, image, price, area, description, provider_img, provider_name, _id} = service || {};
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-[#FFF0EC] dark:text-gray-800">
      <div className="flex items-center space-x-4">
        <img
          alt=""
          src={provider_img}
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <p
            className="text-sm font-semibold"
          >
            {provider_name}
          </p>
        </div>
      </div>
      <div className="">
        <img
          src={image}
          alt=""
          className="object-cover w-full mb-4 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">
          {serviceName}
        </h2>
        <p className="text-sm dark:text-gray-600">
          {`${description.slice(0,100)}...`}
        </p>
      </div>
      <div className="flex flex-wrap justify-between mt-auto">
        <div className="space-x-2">
         <Link to={`/services/${_id}`}><button className="btn bg-[#e29494] text-white hover:bg-[#E63946] cursor-pointer">View Detail</button></Link>
        </div>
        <div className="flex space-x-2 text-sm dark:text-gray-600">
          <p className="text-xl font-bold">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
