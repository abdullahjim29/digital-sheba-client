import { FaCircleCheck } from "react-icons/fa6";
import happyCustomer1 from "../assets/images/happyCustomer1.jpg";
import useTheme from "../hooks/useTheme";
import axiosInstance from "../hooks/axiosInstance";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const TestimonialForm = () => {
  const theme = useTheme();
  const [feedbackError , setFeedbackError] = useState(false);
  const [countFeedback, setCountFeedback] = useState(0);

  useEffect(() => {
    if(countFeedback.length >= 115){
      return setFeedbackError(true);
     }
     setFeedbackError(false)
  }, [countFeedback])

  // testimonial Form
  const testimonialForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const service = form.service.value;
    const photo = form.photoUrl.value;
    const feedback = form.feedback.value;

    const testimonial = {
      name: `${firstName} ${lastName}`,
      service,
      photo,
      feedback,
      role: "Customer",
    };

    if(feedbackError){
      return;
    }

    axiosInstance
      .post("/add-testimonial", testimonial)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Thanks for your feedback!");
          form.reset();
          setCountFeedback(0)
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div className="my-28 w-11/12 mx-auto">
      {/* form container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* left */}
        <div
          className={`p-10 testimonial-path ${
            theme === "light" ? "grad text-black" : "grad2"
          }`}
        >
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-p text-2xl md:text-4xl w-full lg:w-8/12 mb-4"
          >
            We'd love to hear from you!
          </h2>

          <form
            onSubmit={testimonialForm}
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
                className={`w-full rounded p-2 outline-[#3CA200] placeholder:font-[200] ${
                  theme === "light"
                    ? "bg-white text-black border border-white hover:border hover:border-[#3CA200]"
                    : "bg-[#1D232A] border border-[#26313D] hover:border hover:border-[#1D232A]"
                }`}
                placeholder="John"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-[300] text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                className={`w-full rounded p-2 outline-[#3CA200] placeholder:font-[200] ${
                  theme === "light"
                    ? "bg-white text-black border border-white hover:border hover:border-[#3CA200]"
                    : "bg-[#1D232A] border border-[#26313D] hover:border hover:border-[#1D232A]"
                }`}
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
                className={`w-full rounded p-2 outline-[#3CA200] placeholder:font-[200] ${
                  theme === "light"
                    ? "bg-white text-black border border-white hover:border hover:border-[#3CA200]"
                    : "bg-[#1D232A] border border-[#26313D] hover:border hover:border-[#1D232A]"
                }`}
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
                className={`w-full rounded p-2 outline-[#3CA200] placeholder:font-[200] ${
                  theme === "light"
                    ? "bg-white text-black border border-white hover:border hover:border-[#3CA200]"
                    : "bg-[#1D232A] border border-[#26313D] hover:border hover:border-[#1D232A]"
                }`}
                placeholder="e.g.+8801234567890"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-[300] text-sm">
                Service Used
              </label>
              <select
                name="service"
                defaultValue={"Choose Your Service"}
                className={`w-full rounded p-2 outline-[#3CA200] placeholder:font-[200] ${
                  theme === "light"
                    ? "bg-white text-black border border-white hover:border hover:border-[#3CA200]"
                    : "bg-[#1D232A] border border-[#26313D] hover:border hover:border-[#1D232A]"
                }`}
                required
              >
                <option disabled>Choose Your Service</option>
                <option>Web Development</option>
                <option>Digital Marketng</option>
                <option>Graphic Design</option>
                <option>Video Editing</option>
                <option>Content Writing</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-[300] text-sm">Photo URL</label>
              <input
                type="url"
                name="photoUrl"
                className={`w-full rounded p-2 outline-[#3CA200] placeholder:font-[200] ${
                  theme === "light"
                    ? "bg-white text-black border border-white hover:border hover:border-[#3CA200]"
                    : "bg-[#1D232A] border border-[#26313D] hover:border hover:border-[#1D232A]"
                }`}
                paceholder="https://image.jpg"
              />
            </div>

            <div className="md:col-span-2">
              <label className={`block mb-1 font-[300] text-sm`}>
                Your Feedback ({countFeedback.length > 0 ? countFeedback.length : ''}) {feedbackError && <span className="text-red-600">Write between 115 charecters</span>}
              </label>
              <textarea
              onChange={(e) => {
                const value = e.target.value;
                setCountFeedback(value);
              }}
                name="feedback"
                rows="3"
                className={`w-full rounded p-2 outline-[#3CA200] placeholder:font-[200] ${
                  theme === "light"
                    ? "bg-white text-black border border-white hover:border hover:border-[#3CA200]"
                    : "bg-[#1D232A] border border-[#26313D] hover:border hover:border-[#1D232A]"
                } ${feedbackError && 'outline-red-600'}`}
                placeholder="Leave Your feedback in 115 characters"
                required
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
          <div
            className={`p-6 md:p-14 rounded-3xl space-y-5 ${
              theme === "light"
                ? "bg-[#F4F6F0] text-black"
                : "bg-[#26313d] text-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <FaCircleCheck className="text-2xl text-[#3CA200]" />
              <h3 className="text-[15px] md:text-2xl font-p">100% Customer Satisfaction</h3>
            </div>
            <p className="w-full md:w-8/12 font-o ml-0 md:ml-8 font-[200] text-sm md:text-base">
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
