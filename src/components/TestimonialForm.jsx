import { FaCircleCheck } from "react-icons/fa6";
import happyCustomer1 from "../assets/images/happyCustomer1.jpg";

const TestimonialForm = () => {
  return (
    <div className="my-28 w-11/12 mx-auto">
      {/* form container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* left */}
        <div
          className="p-10 grad testimonial-path"
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
