import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

const Accordion = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios("/faqData.json").then((res) => {
      setFaqs(res.data);
    });
  }, []);

  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
        {/* left */}
        <div className="font-p">
          <h4>FAQS</h4>
          <h2 data-aos="fade-up" data-aos-duration="1000" className="text-2xl md:text-4xl w-full md:w-8/12 font-medium mt-5">Frequently Asked Questions</h2>
          <div className="bg-[#E8F5D3] px-6 py-10 w-96 rounded-4xl space-y-10 mt-6">
            <h3 className="text-xl md:text-2xl w-full">Looking for the cleaning service in New York? Contact us now!</h3>

            <button className="group relative inline-flex h-12 items-center justify-between overflow-hidden rounded-full px-4 lg:px-6 font-medium text-black cursor-pointer bg-[#FFFFFF] w-full">
              <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
                + 1 (180) 567-8990
              </div>
              <div className="absolute translate-y-[150%] transition duration-700 group-hover:translate-y-0">
              + 1 (180) 567-8990
              </div>
              <div className="bg-[#F2D701] p-2 rounded-full">
                <MdLocalPhone/>
              </div>
            </button>
          </div>
        </div>

        {/* right faq */}
        <div >
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="collapse collapse-plus my-5"
            >
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title bg-[#F4F6F0] border-b border-b-gray-200 font-p font-normal">{faq.question}</div>
              <div className="collapse-content text-sm bg-[#F4F6F0] font-o font-[300]">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
