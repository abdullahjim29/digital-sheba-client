import { Helmet } from "react-helmet-async";
import ServiceCards from "../components/ServiceCards";
import Banner from "../components/Banner";
import HowItWork from "../components/HowItWork";
import WhoWeAre from "../components/WhoWeAre";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div className="">

      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* banner */}
      <Banner/>

      {/* How it work */}
      <HowItWork/>

      {/* who we are */}
      <WhoWeAre/>

      {/* why choose us */}
      <WhyChooseUs/>

      {/* service cards */}
      <ServiceCards />
    </div>
  );
};

export default Home;
