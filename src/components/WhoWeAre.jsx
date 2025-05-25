import workingPeople3 from "../assets/images/working3.jpg";
import { FaCircleCheck } from "react-icons/fa6";

const WhoWeAre = () => {
  return (
    <div className="max-w-11/12 mx-auto my-40 bg-[#F4F6F0] rounded-3xl flex justify-between flex-col lg:flex-row p-10">
      {/* left side */}
      <div className="w-full lg:w-3/6 font-p space-y-6">
        <h4 className="font-light">WHO WE ARE</h4>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-2xl md:text-4xl w-full lg:w-10/12 font-medium"
        >
          Your All-in-One Solution for Digital Services
        </h2>
        <p
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="text-gray-900 font-o font-[200] w-full lg:w-10/12"
        >
          At Digital Sheba, our goal is to connect you with expert professionals
          in web development, graphic design, digital marketing, and more —
          helping your business grow smarter, faster, and stronger.
        </p>
        <div className="divider w-full lg:w-10/12"></div>

        <div className="w-full lg:w-10/12 space-y-3 font-medium">
          <div className="flex gap-2 items-center">
            <FaCircleCheck className="text-xl text-[#3CA200]" />
            <p>We deliver reliable service tailored to your unique goals</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaCircleCheck className="text-xl text-[#3CA200]" />
            <p>Top professionals who treat your projects like their own</p>
          </div>
        </div>

        <div className="my-10 lg:my-0">
          {/* learn more button*/}
          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#F2D701] px-4 lg:px-6 font-medium text-black cursor-pointer">
            <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
              Learn More
            </div>
            <div className="absolute translate-y-[150%] transition duration-700  group-hover:translate-y-0">
              Learn More
            </div>
          </button>
        </div>
      </div>

      {/* right side */}
      <div data-aos="zoom-out" data-aos-duration="2500" className="w-full lg:w-1/2">
        <img
          className="rounded-4xl max-w-full h-[95%]"
          src={workingPeople3}
          alt=""
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
