import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";
import useTheme from "../hooks/useTheme";

const ServiceCard = ({ service }) => {
  const theme = useTheme();
  const {
    service: serviceName = "Unnamed Service",
    image = "",
    price = 0,
    area = "N/A",
    description = "No description provided",
    provider_img = "",
    provider_name = "Unknown",
    _id = ""
  } = service || {};

  return (
    <motion.div
      data-aos="fade-up"
      whileHover={{ scale: 0.95 }}
      className={`flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-2xl shadow-md dark:text-gray-800 ${theme === 'light' ? 'bg-[#F4F6F0] text-black' : 'border border-gray-700 shadow-md text-white bg-[#1d252e]'}`}
    >
      <div className="flex items-center space-x-4">
        <img
          alt="Provider"
          src={provider_img}
          referrerPolicy="no-referrer"
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <p className={`text-sm font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>{provider_name}</p>
        </div>
      </div>

      <div>
        <img
          src={image}
          alt={serviceName}
          className="object-cover w-full h-54 mb-4 rounded-2xl dark:bg-gray-500"
        />
        <h2 className={`mb-1 text-xl font-semibold font-p ${theme === 'light' ? 'text-black' : 'text-white'}`}>{serviceName}</h2>
        <p className={`flex gap-1 items-center mb-2 text-sm font-o ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          <IoLocationSharp /> {area}
        </p>
        <p className={`text-sm font-o ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          {`${description.length > 100 ? `${description.slice(0, 100)}...` : description}`}
        </p>
        <div className="flex space-x-2 text-sm mt-2">
          <p className={`text-xl font-bold font-p ${theme === 'light' ? 'text-black' : 'text-white'}`}>$ {price}</p>
        </div>
      </div>

      <div className="mt-auto">
        <Link to={`/services/${_id}`}>
          <button className={`group relative inline-flex h-12 items-center justify-between overflow-hidden rounded-full px-4 lg:px-6 font-medium cursor-pointer w-full font-o ${theme === 'light' ? 'bg-[#FFFFFF] text-black ' : 'text-white border border-gray-700'}`}>
            <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
              View Detail
            </div>
            <div className="absolute translate-y-[150%] transition duration-700 group-hover:translate-y-0">
              View Detail
            </div>
            <div className={`p-2 rounded-full ${theme === 'light' ? 'bg-[#E8F5D3]' : 'bg-[#212d3b]'}`}>
              <IoIosArrowForward />
            </div>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
