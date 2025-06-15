import consultationIcon from "../assets/images/consultation.png";
import toolIcon from "../assets/images/tool.png";
import checkmarkIcon from "../assets/images/mark.png";
import expertIcon from "../assets/images/expert.png";
import useTheme from "../hooks/useTheme";

const WhyChooseUs = () => {
  const theme = useTheme();
  return (
    <div className={`w-[95%] mx-auto my-40 px-5 md:px-10 py-20 rounded-4xl ${theme === 'light' ? 'bg-[#3CA200]' : 'border border-[#2d3c4d] text-black bg-[#1d252e]'}`}>
      <div className="text-center font-p space-y-5 mb-14">
        <h4 className="font-thin text-white">WHY CHOOSE US</h4>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-xl md:text-4xl w-full lg:w-6/12 mx-auto text-white font-medium"
        >
          We Are Skilled & Committed to Quality Service
        </h2>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center"
      >
        <div
          className={`${theme === 'light' ? 'bg-[#E8F5D3]' : 'text-white bg-[#26313d]'} px-5 py-12 space-y-3 first-path`}
        >
          <div className="bg-white p-4 rounded-3xl w-[25%]">
            <img className="max-w-full" src={consultationIcon} alt="" />
          </div>
          <h3 className="text-xl md:text-2xl font-medium">
            Free Consultation & Transparent Pricing
          </h3>
          <p className={`${theme === 'light'? 'text-gray-900' : 'text-gray-200'} font-[200] font-o`}>
            Get a clear estimate fast – no hidden fees, just simple and honest
            pricing.
          </p>
        </div>

        <div
          className={`${theme === 'light' ? 'bg-[#E8F5D3]' : 'text-white bg-[#26313d]'} px-5 py-12 space-y-3 second-path`}
        >
          <div className="bg-white p-4 rounded-3xl w-[25%]">
            <img className="max-w-full" src={toolIcon} alt="" />
          </div>
          <h3 className="text-xl md:text-2xl font-medium">
            Tools & Tech Provided
          </h3>
          <p className={`${theme === 'light'? 'text-gray-900' : 'text-gray-200'} font-[200] font-o`}>
            We bring the right tools, software, and expertise to handle your
            digital needs.
          </p>
        </div>

        <div
          className={`${theme === 'light' ? 'bg-[#E8F5D3]' : 'text-white bg-[#26313d]'} px-5 py-12 space-y-3 third-path`}
        >
          <div className="bg-white p-4 rounded-3xl w-[25%]">
            <img className="max-w-full" src={checkmarkIcon} alt="" />
          </div>
          <h3 className="text-xl md:text-2xl font-medium">
            100% Client Satisfaction
          </h3>
          <p className={`${theme === 'light'? 'text-gray-900' : 'text-gray-200'} font-[200] font-o`}>
            Not satisfied? We’ll revise or improve until you’re happy –
            guaranteed.
          </p>
        </div>

        <div
          className={`${theme === 'light' ? 'bg-[#E8F5D3]' : 'text-white bg-[#26313d]'} px-5 py-12 space-y-3 fourth-path`}
        >
          <div className="bg-white p-4 rounded-3xl w-[25%]">
            <img className="max-w-full" src={expertIcon} alt="" />
          </div>
          <h3 className="text-xl md:text-2xl font-medium">
            {" "}
            Vetted & Verified Experts
          </h3>
          <p className={`${theme === 'light'? 'text-gray-900' : 'text-gray-200'} font-[200] font-o`}>
            We carefully verify each provider to ensure you receive safe,
            quality service.
          </p>
        </div>
      </div>

      {/* statistics */}
      <div
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="statistics text-white grid grid-cols-1 md:grid-cols-4 gap-5 items-center mt-16 space-y-5 md:space-y-0"
      >
        <div className="flex gap-4">
          <div className="border border-[#63B533]"></div>
          <div>
            <h3 className="font-p text-5xl relative">
              5<span className="text-xl absolute -top-1 left-8">+</span>
            </h3>
            <p className="font-o font-light">
              years delivering digital solutions
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="border border-[#63B533]"></div>
          <div>
            <h3 className="font-p text-5xl relative">
              200<span className="text-xl absolute -top-2 left-22">+</span>
            </h3>
            <p className="font-o font-light">successful projects completed</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="border border-[#63B533]"></div>
          <div>
            <h3 className="font-p text-5xl relative">
              1000<span className="text-xl absolute -top-2 left-28">+</span>
            </h3>
            <p className="font-o font-light">hours saved for businesses</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="border border-[#63B533]"></div>
          <div>
            <h3 className="font-p text-5xl relative">
              98<span className="text-xl absolute -top-2 left-16">+</span>
            </h3>
            <p className="font-o font-light">of our clients hire us again</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
