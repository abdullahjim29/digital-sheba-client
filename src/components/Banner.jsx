import { Link } from "react-router-dom";
import bannerBg from "../assets/images/serviceBg.jpg";
import { FaCircleCheck } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerBg})`,
        }}
      >
        <div className="hero-overlay hidden sm:block sm:w-[52.50%] lg:w-full"></div>
        <div
          style={{
            clipPath:
              "polygon(32.2492676px 0, calc(100% - 29.883191px) 14.1670774px, calc(100% - 29.883191px) 14.1670774px, calc(100% - 24.96109729px) 14.87537046px, calc(100% - 20.31945472px) 16.29591632px, calc(100% - 16.01424199px) 18.36886116px, calc(100% - 12.1014378px) 21.03435113px, calc(100% - 8.63702087px) 24.23253242px, calc(100% - 5.67696992px) 27.9035512px, calc(100% - 3.27726365px) 31.98755362px, calc(100% - 1.49388076px) 36.42468587px, calc(100% - 0.38279998px) 41.1550941px, calc(100% - 5.68434189E-14px) 46.1189245px, calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0.41860061px) calc(100% - 26.8269604px), calc(100% - 1.63050344px) calc(100% - 21.89983258px), calc(100% - 3.56985995px) calc(100% - 17.30546357px), calc(100% - 6.1708216px) calc(100% - 13.10978045px), calc(100% - 9.36753988px) calc(100% - 9.37871025px), calc(100% - 13.09416624px) calc(100% - 6.17818003px), calc(100% - 17.28485217px) calc(100% - 3.57411685px), calc(100% - 21.87374912px) calc(100% - 1.63244774px), calc(100% - 26.79500858px) calc(100% - 0.41909978px), calc(100% - 31.982782px) calc(100% - 5.68434189E-14px), 31.9827822px calc(100% - 0px), 31.9827822px calc(100% - 0px), 26.79500879px calc(100% - 0.41909978px), 21.87374934px calc(100% - 1.63244774px), 17.28485237px calc(100% - 3.57411685px), 13.09416641px calc(100% - 6.17818003px), 9.36754001px calc(100% - 9.37871025px), 6.1708217px calc(100% - 13.10978045px), 3.56986001px calc(100% - 17.30546357px), 1.63050347px calc(100% - 21.89983258px), .41860062px calc(100% - 26.8269604px), 5.29492535E-31px calc(100% - 32.02092px), 0 32.0209204px, 0 32.0209204px, .41860062px 26.82696079px, 1.63050347px 21.89983293px, 3.56986001px 17.30546389px, 6.1708217px 13.10978071px, 9.36754001px 9.37871045px, 13.09416641px 6.17818017px, 17.28485237px 3.57411693px, 21.87374934px 1.63244779px, 26.79500879px .41909979px, 31.9827822px 5.30123935E-31px, 31.9827822px 0, 32.11152455px 0, 32.2175794px 0, 32.30094672px 0, 32.36162654px 0, 32.39961884px 0, 32.41492362px 0, 32.40754089px 0, 32.37747064px 0, 32.32471288px 0, 32.2492676px 0)",
          }}
          className="hero-content text-center bg-[#F4F6F0] text-black font-p mr-[600px]"
        >
          <div className="max-w-xl px-8 lg:px-14 py-4 space-x-5 text-left">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="mb-5 text-2xl lg:text-5xl font-normal lg:leading-14">
              Smart Connect - Digital Services Made Simple
            </h1>
            <p className="mb-5 text-gray-600">
              Let professionals handle the tasks you don’t have time for. From
              design to tech help, we connect you with trusted service providers
              in seconds.
            </p>

            {/* book a service */}
            <div data-aos="fade-down" data-aos-duration="1000" className="space-x-4 space-y-4">
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#F2D701] px-4 lg:px-6 font-medium text-black cursor-pointer">
              <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
                Book a Service
              </div>
              <div className="absolute translate-y-[150%] transition duration-700  group-hover:translate-y-0">
                Book a Service
              </div>
            </button>

            {/* our service */}
            <Link to={"/services"}>
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-[#42A200] px-4 lg:px-6 font-medium text-black cursor-pointer">
                <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
                  Our Services
                </div>
                <div className="absolute translate-y-[150%] transition duration-700 group-hover:translate-y-0">
                  Our Services
                </div>
              </button>
            </Link>
            </div>

            <div className="flex gap-5 my-5 font-o">
              <div className="flex gap-2 items-center my-5">
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
