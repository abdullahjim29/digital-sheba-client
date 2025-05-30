import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../components/ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import loader from "../assets/lottieFiles/loaderLottie.json"
import AddonServices from "../components/AddonServices";


const Services = () => {
  const servicesData = useLoaderData();
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (servicesData?.data) {
      setServices(servicesData.data);
    }
  }, [servicesData]);

  useEffect(() => {
    AOS.init({ duration: 600});
  }, []);

  return (
    <div className="py-20 px-6 w-[97%] mx-auto services rounded-4xl">
      <Helmet>
        <title>Services</title>
      </Helmet>

      <h4 className="font-p text-center font-[300] text-sm">SERVICES</h4>
      <h2 className="text-2xl md:text-5xl font-normal text-center mb-20 mt-3 font-p">
        Services We Provide
      </h2>

      {services.length === 0 ? (
        <div className="flex justify-center items-center"><Lottie className="w-1/6" animationData={loader}></Lottie></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 my-10">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      )}

      {/* addons */}
      <AddonServices/>

    </div>
  );
};

export default Services;
