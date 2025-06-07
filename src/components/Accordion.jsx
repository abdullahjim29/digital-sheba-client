import axios from "axios";
import { useEffect, useState } from "react";
import { MdLocalPhone } from "react-icons/md";
import useTheme from "../hooks/useTheme";

const Accordion = () => {
  const [faqs, setFaqs] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    axios("/faqData.json").then((res) => {
      setFaqs(res.data);
    });
  }, []);

  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
        {/* left */}
        <div className="font-p">
          <h4>FAQS</h4>
          <h2 data-aos="fade-up" data-aos-duration="5000" className="text-2xl lg:text-4xl w-full md:w-8/12 font-medium mt-5">Frequently Asked Questions</h2>
          <div className={`px-6 py-10 w-auto lg:w-96 rounded-4xl space-y-10 mt-6 ${theme === 'light' ? 'bg-[#E8F5D3]' : 'bg-[#26313D]'}`}>
            <h3 className="text-xl md:text-2xl w-full">Looking for the cleaning service in New York? Contact us now!</h3>

            <button className="group relative inline-flex h-12 items-center justify-between overflow-hidden rounded-full px-4 lg:px-6 font-medium text-black cursor-pointer bg-[#FFFFFF] w-full">
              <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
                + 88 (017) 36-242911
              </div>
              <div className="absolute translate-y-[150%] transition duration-700 group-hover:translate-y-0">
              + 88 (017) 36-242911
              </div>
              <div className="bg-[#F2D701] p-2 rounded-full">
                <MdLocalPhone/>
              </div>
            </button>
          </div>
        </div>

        {/* right faq */}
        <div>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="collapse collapse-plus my-5"
            >
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className={`collapse-title font-p font-normal ${theme === 'light' ? 'bg-[#F4F6F0] border-b border-b-gray-200' : 'bg-[#26313D] border-b border-b-gray-600'}`}>{faq.question}</div>
              <div className={`collapse-content text-sm font-o font-[300] ${theme === 'light' ? 'bg-[#F4F6F0]' : 'bg-[#26313D]'}`}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
