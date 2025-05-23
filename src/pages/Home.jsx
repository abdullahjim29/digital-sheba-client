import { Helmet } from "react-helmet-async";
import ServiceCards from "../components/ServiceCards";
import Banner from "../components/Banner";
import HowItWork from "../components/HowItWork";

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

      {/* service cards */}
      <ServiceCards />
    </div>
  );
};

export default Home;
