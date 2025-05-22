import { Helmet } from "react-helmet-async";
import ServiceCards from "../components/ServiceCards";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="">

      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* banner */}
      <Banner/>

      {/* service cards */}
      <ServiceCards />
    </div>
  );
};

export default Home;
