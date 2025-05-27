import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "motion/react";

const ServiceCard = ({ service }) => {
  const {
    service: serviceName,
    image,
    price,
    description,
    provider_img,
    provider_name,
    _id,
  } = service || {};
  return (
    <motion.div
      whileHover={{scale: 0.95}}
      className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-[#F4F6F0] dark:text-gray-800"
    >
      <div className="flex items-center space-x-4">
        <img
          alt=""
          src={provider_img}
          referrerPolicy="no-referrer"
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-semibold">{provider_name}</p>
        </div>
      </div>
      <div className="">
        <img
          src={image}
          alt=""
          className="object-cover w-full mb-4 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">{serviceName}</h2>
        <p className="text-sm dark:text-gray-600">
          {`${description.slice(0, 100)}...`}
        </p>
        <div className="flex space-x-2 text-sm dark:text-gray-600">
          <p className="text-xl font-bold">$ {price}</p>
        </div>
      </div>
      <div className=" mt-auto">
        <div className="space-x-2">
          <Link to={`/services/${_id}`}>
            {/* <div  className="btn bg-[#FFFFFF] text-black cursor-pointer w-full rounded-full text-left p-6 flex justify-between">
            <div className="bg-[#E8F5D3] p-2 rounded-full">
              <IoIosArrowForward/>
            </div>
            </div> */}

            <button className="group relative inline-flex h-12 items-center justify-between overflow-hidden rounded-full px-4 lg:px-6 font-medium text-black cursor-pointer bg-[#FFFFFF] w-full">
              <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
                View Detail
              </div>
              <div className="absolute translate-y-[150%] transition duration-700 group-hover:translate-y-0">
                View Detail
              </div>
              <div className="bg-[#E8F5D3] p-2 rounded-full">
                <IoIosArrowForward />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
