import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-b from-[#E8F5D3] to-[#F5FBEB] text-gray-800 pt-32 pb-10 px-6 md:px-16 w-[98%] mx-auto footer-path"
    >
      {/* Title + Subscribe (Top Row) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div>
          <h2 data-aos="zoom-in" data-aos-duration="1000" className="text-2xl lg:text-4xl font-medium w-full lg:w-9/12 font-p">
            Our Goal is to Empower You With Every Service
          </h2>
          <button data-aos="fade-up" data-aos-duration="1000" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#F2D701] px-4 lg:px-8 font-medium text-black cursor-pointer mt-5 ">
            <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
              Get a Free Qoute
            </div>
            <div className="absolute translate-y-[150%] transition duration-700  group-hover:translate-y-0">
              Get a Free Qoute
            </div>
          </button>
        </div>
        <div>
          <h3 className="text-sm uppercase font-medium mb-2 font-p">
            Subscribe to our Newsletter
          </h3>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none w-auto lg:w-68 bg-white"
            />
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#3CA200] px-4 lg:px-10 font-medium text-white cursor-pointer">
              <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
                Subscribe
              </div>
              <div className="absolute translate-y-[150%] transition duration-700  group-hover:translate-y-0">
                Subscribe
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Services + Contact Info + Working Hours */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-sm mb-10">
        {/* Services */}
        <div>
          <h3 className="uppercase font-normal mb-4 font-p">Services</h3>
          <div className="grid grid-cols-2 gap-x-4">
            <ul className="space-y-2 text-gray-600 font-[300] font-o">
              <li>Graphic Design</li>
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>SEO Optimization</li>
            </ul>
            <ul className="space-y-2 text-gray-600 font-[300] font-o">
              <li>App Development</li>
              <li>Content Writing</li>
              <li>IT Support</li>
              {/* <li>Social Media Management</li> */}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="uppercase font-normal mb-4 font-p">Contact Info</h3>
          <p className="text-gray-600 font-[300] font-o">Digital Sheba HQ</p>
          <p className="text-gray-600 font-[300] font-o">Plot 12, Sector 3, Uttara, Dhaka 1230</p>
          <button className="group relative inline-flex h-12 items-center justify-between overflow-hidden rounded-full px-4 lg:px-6 font-medium text-black cursor-pointer bg-[#FFFFFF] my-4 gap-3">
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
          <p className="text-green-700 underline">contact@digitalsheba.com</p>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="uppercase font-normal font-p mb-4">Support</h3>
          <ul className="space-y-1 text-sm text-gray-600 font-[300] font-o">
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Live Chat (24/7)</li>
            <li>Submit a Ticket</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <p className="font-o font-light">© 2025 Digital Sheba. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/" className="hover:bg-[#3CA200] p-2 rounded-full text-[#3CA200] hover:text-white text-xl">
            <FaFacebook />
          </Link>
          <Link to="/" className="hover:bg-[#3CA200] p-2 rounded-full text-[#3CA200] hover:text-white text-xl">
            <FaInstagram />
          </Link>
          <Link to="/" className="hover:bg-[#3CA200] p-2 rounded-full text-[#3CA200] hover:text-white text-xl">
            <FaLinkedin />
          </Link>
          <Link to="/" className="hover:bg-[#3CA200] p-2 rounded-full text-[#3CA200] hover:text-white text-xl">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
