import consultationIcon from "../assets/images/consultation.png";
import toolIcon from "../assets/images/tool.png";
import checkmarkIcon from "../assets/images/mark.png";
import expertIcon from "../assets/images/expert.png";

const WhyChooseUs = () => {
  return (
    <div className="w-[95%] mx-auto bg-[#3CA200] my-40 px-10 py-20 rounded-4xl">
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
          className="bg-[#E8F5D3] px-5 py-12 space-y-3"
          style={{
            clipPath:
              "polygon(32.2492676px 0, calc(100% - 29.883191px) 14.1670774px, calc(100% - 29.883191px) 14.1670774px, calc(100% - 24.96109729px) 14.87537046px, calc(100% - 20.31945472px) 16.29591632px, calc(100% - 16.01424199px) 18.36886116px, calc(100% - 12.1014378px) 21.03435113px, calc(100% - 8.63702087px) 24.23253242px, calc(100% - 5.67696992px) 27.9035512px, calc(100% - 3.27726365px) 31.98755362px, calc(100% - 1.49388076px) 36.42468587px, calc(100% - 0.38279998px) 41.1550941px, calc(100% - 5.68434189E-14px) 46.1189245px, calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0.41860061px) calc(100% - 26.8269604px), calc(100% - 1.63050344px) calc(100% - 21.89983258px), calc(100% - 3.56985995px) calc(100% - 17.30546357px), calc(100% - 6.1708216px) calc(100% - 13.10978045px), calc(100% - 9.36753988px) calc(100% - 9.37871025px), calc(100% - 13.09416624px) calc(100% - 6.17818003px), calc(100% - 17.28485217px) calc(100% - 3.57411685px), calc(100% - 21.87374912px) calc(100% - 1.63244774px), calc(100% - 26.79500858px) calc(100% - 0.41909978px), calc(100% - 31.982782px) calc(100% - 5.68434189E-14px), 31.9827822px calc(100% - 0px), 31.9827822px calc(100% - 0px), 26.79500879px calc(100% - 0.41909978px), 21.87374934px calc(100% - 1.63244774px), 17.28485237px calc(100% - 3.57411685px), 13.09416641px calc(100% - 6.17818003px), 9.36754001px calc(100% - 9.37871025px), 6.1708217px calc(100% - 13.10978045px), 3.56986001px calc(100% - 17.30546357px), 1.63050347px calc(100% - 21.89983258px), .41860062px calc(100% - 26.8269604px), 5.29492535E-31px calc(100% - 32.02092px), 0 32.0209204px, 0 32.0209204px, .41860062px 26.82696079px, 1.63050347px 21.89983293px, 3.56986001px 17.30546389px, 6.1708217px 13.10978071px, 9.36754001px 9.37871045px, 13.09416641px 6.17818017px, 17.28485237px 3.57411693px, 21.87374934px 1.63244779px, 26.79500879px .41909979px, 31.9827822px 5.30123935E-31px, 31.9827822px 0, 32.11152455px 0, 32.2175794px 0, 32.30094672px 0, 32.36162654px 0, 32.39961884px 0, 32.41492362px 0, 32.40754089px 0, 32.37747064px 0, 32.32471288px 0, 32.2492676px 0)",
          }}
        >
          <div className="bg-white p-4 rounded-3xl w-[25%]">
            <img className="max-w-full" src={consultationIcon} alt="" />
          </div>
          <h3 className="text-xl md:text-2xl font-medium">
            Free Consultation & Transparent Pricing
          </h3>
          <p className="text-gray-900 font-[200] font-o">
            Get a clear estimate fast – no hidden fees, just simple and honest
            pricing.
          </p>
        </div>

        <div
          className="bg-[#E8F5D3] px-5 py-10 space-y-3"
          style={{
            clipPath:
              "polygon(32.2492676px 0, calc(100% - 29.883191px) 14.1670774px, calc(100% - 29.883191px) 14.1670774px, calc(100% - 24.96109729px) 14.87537046px, calc(100% - 20.31945472px) 16.29591632px, calc(100% - 16.01424199px) 18.36886116px, calc(100% - 12.1014378px) 21.03435113px, calc(100% - 8.63702087px) 24.23253242px, calc(100% - 5.67696992px) 27.9035512px, calc(100% - 3.27726365px) 31.98755362px, calc(100% - 1.49388076px) 36.42468587px, calc(100% - 0.38279998px) 41.1550941px, calc(100% - 5.68434189E-14px) 46.1189245px, calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0.41860061px) calc(100% - 26.8269604px), calc(100% - 1.63050344px) calc(100% - 21.89983258px), calc(100% - 3.56985995px) calc(100% - 17.30546357px), calc(100% - 6.1708216px) calc(100% - 13.10978045px), calc(100% - 9.36753988px) calc(100% - 9.37871025px), calc(100% - 13.09416624px) calc(100% - 6.17818003px), calc(100% - 17.28485217px) calc(100% - 3.57411685px), calc(100% - 21.87374912px) calc(100% - 1.63244774px), calc(100% - 26.79500858px) calc(100% - 0.41909978px), calc(100% - 31.982782px) calc(100% - 5.68434189E-14px), 31.9827822px calc(100% - 0px), 31.9827822px calc(100% - 0px), 26.79500879px calc(100% - 0.41909978px), 21.87374934px calc(100% - 1.63244774px), 17.28485237px calc(100% - 3.57411685px), 13.09416641px calc(100% - 6.17818003px), 9.36754001px calc(100% - 9.37871025px), 6.1708217px calc(100% - 13.10978045px), 3.56986001px calc(100% - 17.30546357px), 1.63050347px calc(100% - 21.89983258px), .41860062px calc(100% - 26.8269604px), 5.29492535E-31px calc(100% - 32.02092px), 0 32.0209204px, 0 32.0209204px, .41860062px 26.82696079px, 1.63050347px 21.89983293px, 3.56986001px 17.30546389px, 6.1708217px 13.10978071px, 9.36754001px 9.37871045px, 13.09416641px 6.17818017px, 17.28485237px 3.57411693px, 21.87374934px 1.63244779px, 26.79500879px .41909979px, 31.9827822px 5.30123935E-31px, 31.9827822px 0, 32.11152455px 0, 32.2175794px 0, 32.30094672px 0, 32.36162654px 0, 32.39961884px 0, 32.41492362px 0, 32.40754089px 0, 32.37747064px 0, 32.32471288px 0, 32.2492676px 0)",
          }}
        >
          <div className="bg-white p-4 rounded-3xl w-[25%]">
            <img className="max-w-full" src={toolIcon} alt="" />
          </div>
          <h3 className="text-xl md:text-2xl font-medium">
            Tools & Tech Provided
          </h3>
          <p className="text-gray-900 font-[200] font-o">
            We bring the right tools, software, and expertise to handle your
            digital needs.
          </p>
        </div>

        <div
          className="bg-[#E8F5D3] px-5 py-10 space-y-3"
          style={{
            clipPath:
              "polygon(32.2492676px 13.8329226px, calc(100% - 29.883191px) 0, calc(100% - 29.883191px) 0, calc(100% - 24.96109729px) .70829306px, calc(100% - 20.31945472px) 2.12883892px, calc(100% - 16.01424199px) 4.20178375px, calc(100% - 12.1014378px) 6.86727374px, calc(100% - 8.63702087px) 10.06545503px, calc(100% - 5.67696992px) 13.73647382px, calc(100% - 3.27726365px) 17.82047625px, calc(100% - 1.49388076px) 22.25760852px, calc(100% - 0.38279998px) 26.98801678px, calc(100% - 5.68434189E-14px) 31.9518472px, calc(100% - 0px) calc(100% - 32.187998px), calc(100% - 0px) calc(100% - 32.187998px), calc(100% - 0.41860061px) calc(100% - 26.99403837px), calc(100% - 1.63050344px) calc(100% - 22.06691047px), calc(100% - 3.56985995px) calc(100% - 17.47254136px), calc(100% - 6.1708216px) calc(100% - 13.2768581px), calc(100% - 9.36753988px) calc(100% - 9.54578775px), calc(100% - 13.09416624px) calc(100% - 6.34525738px), calc(100% - 17.28485217px) calc(100% - 3.74119406px), calc(100% - 21.87374912px) calc(100% - 1.79952485px), calc(100% - 26.79500858px) calc(100% - 0.58617681px), calc(100% - 31.982782px) calc(100% - 0.167077px), 31.9827822px calc(100% - 0.167077px), 31.9827822px calc(100% - 0.167077px), 26.79500879px calc(100% - 0.58617681px), 21.87374934px calc(100% - 1.79952485px), 17.28485237px calc(100% - 3.74119406px), 13.09416641px calc(100% - 6.34525738px), 9.36754001px calc(100% - 9.54578775px), 6.1708217px calc(100% - 13.2768581px), 3.56986001px calc(100% - 17.47254136px), 1.63050347px calc(100% - 22.06691047px), .41860062px calc(100% - 26.99403837px), 5.29492535E-31px calc(100% - 32.187998px), 0 45.853843px, 0 45.853843px, .41860062px 40.65988339px, 1.63050347px 35.73275553px, 3.56986001px 31.13838649px, 6.1708217px 26.94270331px, 9.36754001px 23.21163305px, 13.09416641px 20.01110277px, 17.28485237px 17.40703953px, 21.87374934px 15.46537039px, 26.79500879px 14.25202239px, 31.9827822px 13.8329226px, 31.9827822px 13.8329226px, 32.11152455px 13.8329226px, 32.2175794px 13.8329226px, 32.30094672px 13.8329226px, 32.36162654px 13.8329226px, 32.39961884px 13.8329226px, 32.41492362px 13.8329226px, 32.40754089px 13.8329226px, 32.37747064px 13.8329226px, 32.32471288px 13.8329226px, 32.2492676px 13.8329226px)",
          }}
        >
          <div className="bg-white p-4 rounded-3xl w-[25%]">
            <img className="max-w-full" src={checkmarkIcon} alt="" />
          </div>
          <h3 className="text-xl md:text-2xl font-medium">
            100% Client Satisfaction
          </h3>
          <p className="text-gray-900 font-[200] font-o">
            Not satisfied? We’ll revise or improve until you’re happy –
            guaranteed.
          </p>
        </div>

        <div
          className="bg-[#E8F5D3] px-5 py-10 space-y-3"
          style={{
            clipPath:
              "polygon(32.2492676px 13.8329226px, calc(100% - 29.883191px) 0, calc(100% - 29.883191px) 0, calc(100% - 24.96109729px) .70829306px, calc(100% - 20.31945472px) 2.12883892px, calc(100% - 16.01424199px) 4.20178375px, calc(100% - 12.1014378px) 6.86727374px, calc(100% - 8.63702087px) 10.06545503px, calc(100% - 5.67696992px) 13.73647382px, calc(100% - 3.27726365px) 17.82047625px, calc(100% - 1.49388076px) 22.25760852px, calc(100% - 0.38279998px) 26.98801678px, calc(100% - 5.68434189E-14px) 31.9518472px, calc(100% - 0px) calc(100% - 32.187998px), calc(100% - 0px) calc(100% - 32.187998px), calc(100% - 0.41860061px) calc(100% - 26.99403837px), calc(100% - 1.63050344px) calc(100% - 22.06691047px), calc(100% - 3.56985995px) calc(100% - 17.47254136px), calc(100% - 6.1708216px) calc(100% - 13.2768581px), calc(100% - 9.36753988px) calc(100% - 9.54578775px), calc(100% - 13.09416624px) calc(100% - 6.34525738px), calc(100% - 17.28485217px) calc(100% - 3.74119406px), calc(100% - 21.87374912px) calc(100% - 1.79952485px), calc(100% - 26.79500858px) calc(100% - 0.58617681px), calc(100% - 31.982782px) calc(100% - 0.167077px), 31.9827822px calc(100% - 0.167077px), 31.9827822px calc(100% - 0.167077px), 26.79500879px calc(100% - 0.58617681px), 21.87374934px calc(100% - 1.79952485px), 17.28485237px calc(100% - 3.74119406px), 13.09416641px calc(100% - 6.34525738px), 9.36754001px calc(100% - 9.54578775px), 6.1708217px calc(100% - 13.2768581px), 3.56986001px calc(100% - 17.47254136px), 1.63050347px calc(100% - 22.06691047px), .41860062px calc(100% - 26.99403837px), 5.29492535E-31px calc(100% - 32.187998px), 0 45.853843px, 0 45.853843px, .41860062px 40.65988339px, 1.63050347px 35.73275553px, 3.56986001px 31.13838649px, 6.1708217px 26.94270331px, 9.36754001px 23.21163305px, 13.09416641px 20.01110277px, 17.28485237px 17.40703953px, 21.87374934px 15.46537039px, 26.79500879px 14.25202239px, 31.9827822px 13.8329226px, 31.9827822px 13.8329226px, 32.11152455px 13.8329226px, 32.2175794px 13.8329226px, 32.30094672px 13.8329226px, 32.36162654px 13.8329226px, 32.39961884px 13.8329226px, 32.41492362px 13.8329226px, 32.40754089px 13.8329226px, 32.37747064px 13.8329226px, 32.32471288px 13.8329226px, 32.2492676px 13.8329226px)",
          }}
        >
          <div className="bg-white p-4 rounded-3xl w-[25%]">
            <img className="max-w-full" src={expertIcon} alt="" />
          </div>
          <h3 className="text-xl md:text-2xl font-medium">
            {" "}
            Vetted & Verified Experts
          </h3>
          <p className="text-gray-900 font-[200] font-o">
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
              5<san className="text-xl absolute -top-1 left-8">+</san>
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
