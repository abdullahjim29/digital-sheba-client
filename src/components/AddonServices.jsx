import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaRedo,
  FaPhoneAlt,
  FaRocket,
  FaFileAlt,
  FaMagic,
  FaLanguage,
  FaUsers,
} from "react-icons/fa";
import useTheme from "../hooks/useTheme";


const iconMap = {
  FaRedo: <FaRedo className="text-[#3CA200] text-3xl" />,
  FaPhoneAlt: <FaPhoneAlt className="text-[#3CA200] text-3xl" />,
  FaRocket: <FaRocket className="text-[#3CA200] text-3xl" />,
  FaFileAlt: <FaFileAlt className="text-[#3CA200] text-3xl" />,
  FaMagic: <FaMagic className="text-[#3CA200] text-3xl" />,
  FaLanguage: <FaLanguage className="text-[#3CA200] text-3xl" />,
  FaUsers: <FaUsers className="text-[#3CA200] text-3xl" />,
};

const AddonServices = () => {
  const theme = useTheme();

    const [addonsData, setAddonsData] = useState([]);
    useEffect(() => {
        axios('/addonServices.json')
        .then(res => setAddonsData(res.data))
    }, [])
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 data-aos="fade-up" data-aos-duration="1000" className="text-xl md:text-2xl lg:text-4xl font-medium text-center font-p mb-4 w-full md:w-8/12 lg:w-6/12 mx-auto leading-auto lg:leading-12">
        Add-on Services for Enhanced Digital Support
      </h2>
      <p className={`text-center font-o font-[300] mb-10 w-full md:w-10/12 lg:w-6/12 mx-auto ${theme === 'light' ? 'text-gray-600 ' : 'text-gray-300'}`}>
        Boost your service with extra features and extended support. These
        optional add-ons help you get the most value from your booking.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {addonsData.map((addon, idx) => (
          <div
            key={idx}
            className={`shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 ${theme === 'light' ? 'bg-[#F4F6F0]' : 'bg-[#26313D]'}`}
          >
            <div className="mb-4">{iconMap[addon.icon]}</div>
            <h3 className="text-lg font-semibold font-p mb-1">{addon.title}</h3>
            <p className={`text-sm font-o mb-2 ${theme === 'light' ? 'text-[#3CA200]' : 'text-[#4787cc]'}`}>{addon.price}</p>
            <p className={`text-sm font-o ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{addon.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddonServices;