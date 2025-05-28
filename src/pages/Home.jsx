import { Helmet } from "react-helmet-async";
import ServiceCards from "../components/ServiceCards";
import Banner from "../components/Banner";
import HowItWork from "../components/HowItWork";
import WhoWeAre from "../components/WhoWeAre";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonial";
import TestimonialForm from "../components/TestimonialForm";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

        {/* banner */}
        <Banner />

        {/* How it work */}
        <HowItWork />

        {/* who we are */}
        <WhoWeAre />

      {/* why choose us */}
      <WhyChooseUs />

      {/* service cards */}
        <ServiceCards />

      {/* Testimonial */}
      <Testimonial/>

      {/* testimonial form */}
      <TestimonialForm/>
      
    </div>
  );
};

export default Home;
