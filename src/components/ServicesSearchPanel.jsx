import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ServicesSearchPanel = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-16 left-0 w-full bg-[#f4f6f0] z-40 shadow-lg transition-all duration-500 ease-in-out ${
        isOpen ? "h-72 opacity-100" : "h-0 opacity-0 overflow-hidden"
      }`}
    >
      <div className="relative md:w-8/12 lg:w-4/12 mx-auto px-4 py-6">
        <input
          type="text"
          placeholder="Search services..."
          className="w-80 md:w-96 px-6 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 bg-white hover:border-[#3CA200]"
        />
        <FaSearch className="absolute w-full -right-24 md:-right-30 lg:-right-38 top-[40px] text-gray-500 cursor-pointer" size={20} />
        <IoClose
          size={28}
          onClick={onClose}
          className="absolute top-9 right-10 md:right-20 lg:right-1 cursor-pointer text-gray-600 hover:text-red-600"
        />
      </div>
    </div>
  );
};

export default ServicesSearchPanel;
