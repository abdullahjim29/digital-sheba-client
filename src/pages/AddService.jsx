import toast from "react-hot-toast";
import UseAuth from "../hooks/useAuth";
import axiosInstance from "../hooks/AxiosInstance";
import { Helmet } from "react-helmet-async";
import { FaCircleCheck } from "react-icons/fa6";
import serviceImg from "../assets/images/addService.jpg";

const AddService = () => {
  const { user } = UseAuth();

  // add service form
  const handleAddService = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.imageUrl.value;
    const service = form.serviceName.value;
    const price = parseFloat(form.price.value);
    const area = form.serviceArea.value;
    const description = form.description.value;

    const newService = {
      image,
      service,
      price,
      area,
      description,
      provider_img: user?.photoURL,
      provider_name: user?.displayName,
      provider_email: user?.email,
    };

    // post service
    axiosInstance
      .post(`/add-service`, newService)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Service added succsessfully!");
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <div className="divider h-[1px] bg-gray-50"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-30 mt-10 w-11/12 mx-auto">
        <Helmet>
          <title>Add-Service</title>
        </Helmet>

        {/* left */}
        <div
          className="p-10 grad"
          style={{
            clipPath:
              "polygon(32.2492676px 0, calc(100% - 29.883191px) 14.1670774px, calc(100% - 29.883191px) 14.1670774px, calc(100% - 24.96109729px) 14.87537046px, calc(100% - 20.31945472px) 16.29591632px, calc(100% - 16.01424199px) 18.36886116px, calc(100% - 12.1014378px) 21.03435113px, calc(100% - 8.63702087px) 24.23253242px, calc(100% - 5.67696992px) 27.9035512px, calc(100% - 3.27726365px) 31.98755362px, calc(100% - 1.49388076px) 36.42468587px, calc(100% - 0.38279998px) 41.1550941px, calc(100% - 5.68434189E-14px) 46.1189245px, calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0.41860061px) calc(100% - 26.8269604px), calc(100% - 1.63050344px) calc(100% - 21.89983258px), calc(100% - 3.56985995px) calc(100% - 17.30546357px), calc(100% - 6.1708216px) calc(100% - 13.10978045px), calc(100% - 9.36753988px) calc(100% - 9.37871025px), calc(100% - 13.09416624px) calc(100% - 6.17818003px), calc(100% - 17.28485217px) calc(100% - 3.57411685px), calc(100% - 21.87374912px) calc(100% - 1.63244774px), calc(100% - 26.79500858px) calc(100% - 0.41909978px), calc(100% - 31.982782px) calc(100% - 5.68434189E-14px), 31.9827822px calc(100% - 0px), 31.9827822px calc(100% - 0px), 26.79500879px calc(100% - 0.41909978px), 21.87374934px calc(100% - 1.63244774px), 17.28485237px calc(100% - 3.57411685px), 13.09416641px calc(100% - 6.17818003px), 9.36754001px calc(100% - 9.37871025px), 6.1708217px calc(100% - 13.10978045px), 3.56986001px calc(100% - 17.30546357px), 1.63050347px calc(100% - 21.89983258px), .41860062px calc(100% - 26.8269604px), 5.29492535E-31px calc(100% - 32.02092px), 0 32.0209204px, 0 32.0209204px, .41860062px 26.82696079px, 1.63050347px 21.89983293px, 3.56986001px 17.30546389px, 6.1708217px 13.10978071px, 9.36754001px 9.37871045px, 13.09416641px 6.17818017px, 17.28485237px 3.57411693px, 21.87374934px 1.63244779px, 26.79500879px .41909979px, 31.9827822px 5.30123935E-31px, 31.9827822px 0, 32.11152455px 0, 32.2175794px 0, 32.30094672px 0, 32.36162654px 0, 32.39961884px 0, 32.41492362px 0, 32.40754089px 0, 32.37747064px 0, 32.32471288px 0, 32.2492676px 0)",
          }}
        >
          <h2 className="font-p text-2xl md:text-4xl w-full lg:w-10/12 mb-4">
            Add Your Service!
          </h2>

          <form
            data-aos="fade-zoom-in"
            data-aos-duration="700"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            onSubmit={handleAddService}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 font-o"
          >
            {/* service name */}
            <div className="space-y-2">
              <label className="block">Service Name</label>
              <input
                type="text"
                name="serviceName"
                required
                placeholder="Service Name"
                className="w-full rounded p-2 bg-white outline-[#3CA200] border border-white hover:border hover:border-[#3CA200] placeholder:font-[200]"
              />
            </div>

            {/* image url */}
            <div className="space-y-2">
              <label className="block">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                required
                placeholder="Image URL"
                className="w-full rounded p-2 bg-white outline-[#3CA200] border border-white hover:border hover:border-[#3CA200] placeholder:font-[200]"
              />
            </div>

            {/* price */}
            <div className="space-y-2">
              <label className="block">Price</label>
              <input
                type="text"
                name="price"
                required
                placeholder="Price"
                className="w-full rounded p-2 bg-white outline-[#3CA200] border border-white hover:border hover:border-[#3CA200] placeholder:font-[200]"
              />
            </div>

            {/* Service Area*/}
            <div className="space-y-2">
              <label className="block">Service Area</label>
              <input
                type="text"
                name="serviceArea"
                required
                placeholder="Service Area"
                className="w-full rounded p-2 bg-white outline-[#3CA200] border border-white hover:border hover:border-[#3CA200] placeholder:font-[200]"
              />
            </div>

            {/* Description */}
            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="block">Description</label>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="5"
                className="w-full rounded p-2 bg-white outline-[#3CA200] border border-white hover:border hover:border-[#3CA200] placeholder:font-[200]"
              ></textarea>
            </div>

            <div className="md:col-span-2 text-left">
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-black px-6 lg:px-6 font-medium text-white cursor-pointer">
                <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
                  Add Service
                </div>
                <div className="absolute translate-y-[150%] transition duration-700  group-hover:translate-y-0">
                  Add Service
                </div>
              </button>
            </div>
          </form>
        </div>

        {/* right */}
        <div>
          <div className="flex flex-col justify-center items-start px-10 py-12 bg-[#F4F6F0] rounded-r-4xl shadow-lg">
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-medium text-gray-800 mb-4 leading-tight font-p"
            >
              Share Your Talent <br /> with the Digital World
            </h2>

            <p className="text-gray-700 text-base mb-6 max-w-md font-o font-light">
              Whether you're a designer, marketer, writer, developer, or
              consultant — DigitalSheba is your gateway to reach new clients and
              earn on your own terms. Let your service speak for itself.
            </p>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex gap-2 items-center">
                <FaCircleCheck className="text-[#3CA200]" />
                <span>Get discovered by customers near you</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaCircleCheck className="text-[#3CA200]" />
                <span>Simple, fast service publishing</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaCircleCheck className="text-[#3CA200]" />
                <span>Build your digital reputation with reviews</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 colorful h-60 rounded-4xl">
            {/* <img
              src={serviceImg}
              alt="Service Illustration"
              className="w-full h-auto md:h-60 object-cover rounded-r-3xl"
            /> */}
          </div>
        </div>
      </div>
      {/* another section */}
      <section className="w-11/12 mx-auto bg-[#3CA200] py-32 px-6 md:px-20 text-center mb-40 rounded-4xl">
        <div className="max-w-5xl mx-auto">
          <h2 data-aos="fade-up" data-aos-duration="500" className="text-2xl md:text-4xl font-medium text-white mb-4 font-p">
            Why Join DigitalSheba?
          </h2>
          <p className="text-white text-lg mb-10 fnt-o w-full md:w-8/12 lg:w-7/12 mx-auto">
            Whether you're a freelancer, agency, or expert — DigitalSheba helps
            you reach clients, grow your business, and build your brand.
          </p>

          <div data-aos="fade-up" data-aos-duration="1000" className="grid md:grid-cols-3 gap-8 text-left">
            <div
              style={{
                clipPath:
                  "polygon(32.2492676px 0, calc(100% - 29.883191px) 14.1670774px, calc(100% - 29.883191px) 14.1670774px, calc(100% - 24.96109729px) 14.87537046px, calc(100% - 20.31945472px) 16.29591632px, calc(100% - 16.01424199px) 18.36886116px, calc(100% - 12.1014378px) 21.03435113px, calc(100% - 8.63702087px) 24.23253242px, calc(100% - 5.67696992px) 27.9035512px, calc(100% - 3.27726365px) 31.98755362px, calc(100% - 1.49388076px) 36.42468587px, calc(100% - 0.38279998px) 41.1550941px, calc(100% - 5.68434189E-14px) 46.1189245px, calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0.41860061px) calc(100% - 26.8269604px), calc(100% - 1.63050344px) calc(100% - 21.89983258px), calc(100% - 3.56985995px) calc(100% - 17.30546357px), calc(100% - 6.1708216px) calc(100% - 13.10978045px), calc(100% - 9.36753988px) calc(100% - 9.37871025px), calc(100% - 13.09416624px) calc(100% - 6.17818003px), calc(100% - 17.28485217px) calc(100% - 3.57411685px), calc(100% - 21.87374912px) calc(100% - 1.63244774px), calc(100% - 26.79500858px) calc(100% - 0.41909978px), calc(100% - 31.982782px) calc(100% - 5.68434189E-14px), 31.9827822px calc(100% - 0px), 31.9827822px calc(100% - 0px), 26.79500879px calc(100% - 0.41909978px), 21.87374934px calc(100% - 1.63244774px), 17.28485237px calc(100% - 3.57411685px), 13.09416641px calc(100% - 6.17818003px), 9.36754001px calc(100% - 9.37871025px), 6.1708217px calc(100% - 13.10978045px), 3.56986001px calc(100% - 17.30546357px), 1.63050347px calc(100% - 21.89983258px), .41860062px calc(100% - 26.8269604px), 5.29492535E-31px calc(100% - 32.02092px), 0 32.0209204px, 0 32.0209204px, .41860062px 26.82696079px, 1.63050347px 21.89983293px, 3.56986001px 17.30546389px, 6.1708217px 13.10978071px, 9.36754001px 9.37871045px, 13.09416641px 6.17818017px, 17.28485237px 3.57411693px, 21.87374934px 1.63244779px, 26.79500879px .41909979px, 31.9827822px 5.30123935E-31px, 31.9827822px 0, 32.11152455px 0, 32.2175794px 0, 32.30094672px 0, 32.36162654px 0, 32.39961884px 0, 32.41492362px 0, 32.40754089px 0, 32.37747064px 0, 32.32471288px 0, 32.2492676px 0)",
              }}
              className="bg-[#E8F5D3] shadow-md rounded-xl px-6 py-18 hover:shadow-lg transition"
            >
              <h3 className="text-xl md:text-2xl font-medium font-p mb-2 text-black">
                🚀 Grow Fast
              </h3>
              <p className="text-gray-600 font-[300] font-o">
                List your services and connect with clients instantly. No
                complex setup or upfront cost.
              </p>
            </div>

            <div className="bg-[#E8F5D3] shadow-md rounded-xl px-6 py-18 hover:shadow-lg transition">
              <h3 className="text-xl md:text-2xl font-medium font-p mb-2 text-black">
                🌐 Build Presence
              </h3>
              <p className="text-gray-600 font-[300] font-o">
                Create a professional listing and let your services shine online
                24/7.
              </p>
            </div>

            <div
              style={{
                clipPath:
                  "polygon(32.2492676px 13.8329226px, calc(100% - 29.883191px) 0, calc(100% - 29.883191px) 0, calc(100% - 24.96109729px) .70829306px, calc(100% - 20.31945472px) 2.12883892px, calc(100% - 16.01424199px) 4.20178375px, calc(100% - 12.1014378px) 6.86727374px, calc(100% - 8.63702087px) 10.06545503px, calc(100% - 5.67696992px) 13.73647382px, calc(100% - 3.27726365px) 17.82047625px, calc(100% - 1.49388076px) 22.25760852px, calc(100% - 0.38279998px) 26.98801678px, calc(100% - 5.68434189E-14px) 31.9518472px, calc(100% - 0px) calc(100% - 32.187998px), calc(100% - 0px) calc(100% - 32.187998px), calc(100% - 0.41860061px) calc(100% - 26.99403837px), calc(100% - 1.63050344px) calc(100% - 22.06691047px), calc(100% - 3.56985995px) calc(100% - 17.47254136px), calc(100% - 6.1708216px) calc(100% - 13.2768581px), calc(100% - 9.36753988px) calc(100% - 9.54578775px), calc(100% - 13.09416624px) calc(100% - 6.34525738px), calc(100% - 17.28485217px) calc(100% - 3.74119406px), calc(100% - 21.87374912px) calc(100% - 1.79952485px), calc(100% - 26.79500858px) calc(100% - 0.58617681px), calc(100% - 31.982782px) calc(100% - 0.167077px), 31.9827822px calc(100% - 0.167077px), 31.9827822px calc(100% - 0.167077px), 26.79500879px calc(100% - 0.58617681px), 21.87374934px calc(100% - 1.79952485px), 17.28485237px calc(100% - 3.74119406px), 13.09416641px calc(100% - 6.34525738px), 9.36754001px calc(100% - 9.54578775px), 6.1708217px calc(100% - 13.2768581px), 3.56986001px calc(100% - 17.47254136px), 1.63050347px calc(100% - 22.06691047px), .41860062px calc(100% - 26.99403837px), 5.29492535E-31px calc(100% - 32.187998px), 0 45.853843px, 0 45.853843px, .41860062px 40.65988339px, 1.63050347px 35.73275553px, 3.56986001px 31.13838649px, 6.1708217px 26.94270331px, 9.36754001px 23.21163305px, 13.09416641px 20.01110277px, 17.28485237px 17.40703953px, 21.87374934px 15.46537039px, 26.79500879px 14.25202239px, 31.9827822px 13.8329226px, 31.9827822px 13.8329226px, 32.11152455px 13.8329226px, 32.2175794px 13.8329226px, 32.30094672px 13.8329226px, 32.36162654px 13.8329226px, 32.39961884px 13.8329226px, 32.41492362px 13.8329226px, 32.40754089px 13.8329226px, 32.37747064px 13.8329226px, 32.32471288px 13.8329226px, 32.2492676px 13.8329226px)",
              }}
              className="bg-[#E8F5D3] shadow-md rounded-xl px-6 py-18 hover:shadow-lg transition"
            >
              <h3 className="text-xl md:text-2xl font-medium mb-2 text-black font-p">
                💬 Real Support
              </h3>
              <p className="text-gray-600 font-o font-[300]">
                Our team helps you succeed with tools, support, and visibility
                on the platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddService;
