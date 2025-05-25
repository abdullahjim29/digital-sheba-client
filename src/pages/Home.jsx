import { Helmet } from "react-helmet-async";
import ServiceCards from "../components/ServiceCards";
import Banner from "../components/Banner";
import HowItWork from "../components/HowItWork";
import WhoWeAre from "../components/WhoWeAre";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div className="relative">

      <Helmet>
        <title>Home</title>
      </Helmet>

      <div>
        {/* banner */}
      <Banner/>
      </div>

      <div>
        {/* How it work */}
      <HowItWork/>
      </div>

      <div className="">
        {/* who we are */}
      <WhoWeAre/>
      </div>

      <div className="">
        {/* why choose us */}
      <WhyChooseUs/>
      </div>

      {/* service cards */}
      <div className="">
      <ServiceCards />
      </div>
    </div>
  );
};

export default Home;
