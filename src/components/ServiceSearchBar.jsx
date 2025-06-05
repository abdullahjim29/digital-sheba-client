import { FaSearch } from "react-icons/fa";

const ServiceSearchBar = ({setSearchVaue}) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="700"
      className="w-full max-w-3xl mx-auto mt-6 mb-20 px-4 "
    >
      <div className="relative">
        <input
        onChange={(e) => setSearchVaue(e.target.value)}
          type="text"
          placeholder="Search for services with title (e.g. Web Design, SEO)..."
          className="w-full bg-white border border-gray-300 rounded-full py-3 pl-12 pr-4 shadow-md focus:outline-none focus:ring-2 focus-within:ring-2 focus-within:ring-blue-400 transition duration-300 text-gray-700 placeholder-gray-400 font-o font-[400]"
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
      </div>
    </div>
  );
};

export default ServiceSearchBar;