import { Helmet } from "react-helmet-async";
import ServiceCards from "../components/ServiceCards";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* banner */}

      {/* service cards */}
      <ServiceCards />
    </div>
  );
};

export default Home;
