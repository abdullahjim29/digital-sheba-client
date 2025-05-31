import { FaCircleCheck } from "react-icons/fa6";
import happyCustomer1 from "../assets/images/happyCustomer1.jpg";

const TestimonialForm = () => {
  return (
    <div className="my-28 w-11/12 mx-auto">
      {/* form container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* left */}
        <div
          className="p-10 grad"
          style={{
            clipPath:
              "polygon(32.2492676px 0, calc(100% - 29.883191px) 14.1670774px, calc(100% - 29.883191px) 14.1670774px, calc(100% - 24.96109729px) 14.87537046px, calc(100% - 20.31945472px) 16.29591632px, calc(100% - 16.01424199px) 18.36886116px, calc(100% - 12.1014378px) 21.03435113px, calc(100% - 8.63702087px) 24.23253242px, calc(100% - 5.67696992px) 27.9035512px, calc(100% - 3.27726365px) 31.98755362px, calc(100% - 1.49388076px) 36.42468587px, calc(100% - 0.38279998px) 41.1550941px, calc(100% - 5.68434189E-14px) 46.1189245px, calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0.41860061px) calc(100% - 26.8269604px), calc(100% - 1.63050344px) calc(100% - 21.89983258px), calc(100% - 3.56985995px) calc(100% - 17.30546357px), calc(100% - 6.1708216px) calc(100% - 13.10978045px), calc(100% - 9.36753988px) calc(100% - 9.37871025px), calc(100% - 13.09416624px) calc(100% - 6.17818003px), calc(100% - 17.28485217px) calc(100% - 3.57411685px), calc(100% - 21.87374912px) calc(100% - 1.63244774px), calc(100% - 26.79500858px) calc(100% - 0.41909978px), calc(100% - 31.982782px) calc(100% - 5.68434189E-14px), 31.9827822px calc(100% - 0px), 31.9827822px calc(100% - 0px), 26.79500879px calc(100% - 0.41909978px), 21.87374934px calc(100% - 1.63244774px), 17.28485237px calc(100% - 3.57411685px), 13.09416641px calc(100% - 6.17818003px), 9.36754001px calc(100% - 9.37871025px), 6.1708217px calc(100% - 13.10978045px), 3.56986001px calc(100% - 17.30546357px), 1.63050347px calc(100% - 21.89983258px), .41860062px calc(100% - 26.8269604px), 5.29492535E-31px calc(100% - 32.02092px), 0 32.0209204px, 0 32.0209204px, .41860062px 26.82696079px, 1.63050347px 21.89983293px, 3.56986001px 17.30546389px, 6.1708217px 13.10978071px, 9.36754001px 9.37871045px, 13.09416641px 6.17818017px, 17.28485237px 3.57411693px, 21.87374934px 1.63244779px, 26.79500879px .41909979px, 31.9827822px 5.30123935E-31px, 31.9827822px 0, 32.11152455px 0, 32.2175794px 0, 32.30094672px 0, 32.36162654px 0, 32.39961884px 0, 32.41492362px 0, 32.40754089px 0, 32.37747064px 0, 32.32471288px 0, 32.2492676px 0)",
          }}
        >
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-p text-2xl md:text-4xl w-full lg:w-8/12 mb-4"
          >
            We'd love to hear from you!
          </h2>

          <form
            data-aos="fade-zoom-in"
            data-aos-duration="700"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 font-o"
          >
            <div>
              <label className="block mb-1 font-[300] text-sm">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full rounded p-2 bg-white outline-[#3CA200] border border-white hover:border hover:border-[#3CA200] placeholder:font-[200]"
                placeholder="John"
              />
            </div>

            <div>
              <label className="block mb-1 font-[300] text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-full rounded p-2 bg-white outline-[#3CA200] border border-white hover:border hover:border-[#3CA200] placeholder:font-[200]"
                placeholder="Smith"
              />
            </div>

            <div>
              <label className="block mb-1 font-[300] text-sm">
                Email (Optional)
              </label>
              <input
                type="email"
                name="email"
                className="w-full rounded p-2 bg-white outline-[#3CA200] border border-white hover:border hover:border-[#3CA200] placeholder:font-[200]"
                placeholder="e.g.john@youremail.com"
              />
            </div>

            <div>
              <label className="block mb-1 font-[300] text-sm">
                Phone (Optional)
              </label>
              <input
                type="text"
                name="phone"
                className="w-full rounded p-2 bg-white outline-[#3CA200] border border-white hover:border hover:border-[#3CA200] placeholder:font-[200]"
                placeholder="e.g.+8801234567890"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-[300] text-sm">
                Service Used
              </label>
              <select
                defaultValue={"Choose Your Service"}
                className="rounded-md p-2 bg-white w-full outline-[#3CA200] border border-white hover:border hover:border-[#3CA200] placeholder:font-[200]"
              >
                <option disabled>Choose Your Service</option>
                <option>Web Development</option>
                <option>Digital Marketng</option>
                <option>Graphic Design</option>
                <option>Video Editing</option>
                <option>Content Writing</option>
                <option></option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-[300] text-sm">
                Your Comment
              </label>
              <textarea
                name="comment"
                rows="3"
                className="w-full rounded p-2 bg-white outline-[#3CA200] border border-white hover:border hover:border-[#3CA200] placeholder:font-[200]"
                placeholder="Leave Your Comment"
              />
            </div>

            <div className="md:col-span-2 text-left">
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-black px-4 lg:px-6 font-medium text-white cursor-pointer">
                <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
                  Leave a comment
                </div>
                <div className="absolute translate-y-[150%] transition duration-700  group-hover:translate-y-0">
                  Leave a comment
                </div>
              </button>
            </div>
          </form>
        </div>

        {/* right */}
        <div className="space-y-5">
          {/* image */}
          <div>
            <img
              className="rounded-3xl max-w-ful"
              src={happyCustomer1}
              alt=""
            />
          </div>

          {/* text */}
          <div className="bg-[#F4F6F0] p-10 rounded-3xl space-y-5">
            <div className="flex items-center gap-3">
              <FaCircleCheck className="text-xl md:text-2xl text-[#3CA200]" />
              <h3 className="text-2xl font-p">100% Customer Satisfaction</h3>
            </div>
            <p className="w-full md:w-8/12 font-o ml-8 font-[200] text-gray-900">
              At Digital Sheba, your satisfaction is our top priority. We
              proudly offer a 100% Service Guarantee on all bookings. Your
              feedback helps us grow and serve you better!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialForm;
