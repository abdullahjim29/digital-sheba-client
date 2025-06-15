import { Link } from "react-router-dom";
import bannerBg from "../assets/images/serviceBg.jpg";
import { FaCircleCheck } from "react-icons/fa6";
import useTheme from "../hooks/useTheme";

const Banner = () => {
  const theme = useTheme();

  return (
    <div className="py-8 md:py-10">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerBg})`,
        }}
      >
        <div className="hero-overlay sm:w-[53.50%] lg:w-full"></div>
        <div
          className={`hero-content text-center font-p ml-2 md:ml-0 mr-4 md:mr-[600px] banner-path py-10 ${
            theme === "light" ? "bg-[#F4F6F0] text-black" : "bg-[#26313D]"
          }`}
        >
          <div className="max-w-xl px-2 md:px-8 lg:px-14 py-4 space-x-5 text-left">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="mb-5 text-xl lg:text-5xl font-normal lg:leading-14"
            >
              Smart Connect - Digital Services Made Simple
            </h1>
            <p
              className={`mb-5 font-[200] font-o ${
                theme === "light" ? "text-gray-900" : ""
              }`}
            >
              Let professionals handle the tasks you don’t have time for. From
              design to tech help, we connect you with trusted service providers
              in seconds.
            </p>

            {/* book a service */}
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="space-x-4 space-y-4"
            >
              <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-[#F2D701] px-8 font-medium text-black cursor-pointer">
                <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
                  Book
                </div>
                <div className="absolute translate-y-[150%] transition duration-700  group-hover:translate-y-0">
                  Book
                </div>
              </button>

              {/* our service */}
              <Link to={"/services"}>
                <button
                  className={`group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full px-4 lg:px-6 font-medium cursor-pointer ${
                    theme === "light"
                      ? "border border-[#42A200] text-black"
                      : "border border-gray-600"
                  }`}
                >
                  <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
                    Services
                  </div>
                  <div className="absolute translate-y-[150%] transition duration-700 group-hover:translate-y-0">
                   Services
                  </div>
                </button>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-x-5 gap-y-2 md:gap-y-0 my-5 font-o">
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-[#3CA200]" />
                <span>Professional</span>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-[#3CA200]" />
                <span>Friendly</span>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-[#3CA200]" />
                <span> Fast & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
