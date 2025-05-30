import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      style={{
        clipPath:
          "polygon(32.2492676px 0, calc(100% - 29.883191px) 14.1670774px, calc(100% - 29.883191px) 14.1670774px, calc(100% - 24.96109729px) 14.87537046px, calc(100% - 20.31945472px) 16.29591632px, calc(100% - 16.01424199px) 18.36886116px, calc(100% - 12.1014378px) 21.03435113px, calc(100% - 8.63702087px) 24.23253242px, calc(100% - 5.67696992px) 27.9035512px, calc(100% - 3.27726365px) 31.98755362px, calc(100% - 1.49388076px) 36.42468587px, calc(100% - 0.38279998px) 41.1550941px, calc(100% - 5.68434189E-14px) 46.1189245px, calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0px) calc(100% - 32.02092px), calc(100% - 0.41860061px) calc(100% - 26.8269604px), calc(100% - 1.63050344px) calc(100% - 21.89983258px), calc(100% - 3.56985995px) calc(100% - 17.30546357px), calc(100% - 6.1708216px) calc(100% - 13.10978045px), calc(100% - 9.36753988px) calc(100% - 9.37871025px), calc(100% - 13.09416624px) calc(100% - 6.17818003px), calc(100% - 17.28485217px) calc(100% - 3.57411685px), calc(100% - 21.87374912px) calc(100% - 1.63244774px), calc(100% - 26.79500858px) calc(100% - 0.41909978px), calc(100% - 31.982782px) calc(100% - 5.68434189E-14px), 31.9827822px calc(100% - 0px), 31.9827822px calc(100% - 0px), 26.79500879px calc(100% - 0.41909978px), 21.87374934px calc(100% - 1.63244774px), 17.28485237px calc(100% - 3.57411685px), 13.09416641px calc(100% - 6.17818003px), 9.36754001px calc(100% - 9.37871025px), 6.1708217px calc(100% - 13.10978045px), 3.56986001px calc(100% - 17.30546357px), 1.63050347px calc(100% - 21.89983258px), .41860062px calc(100% - 26.8269604px), 5.29492535E-31px calc(100% - 32.02092px), 0 32.0209204px, 0 32.0209204px, .41860062px 26.82696079px, 1.63050347px 21.89983293px, 3.56986001px 17.30546389px, 6.1708217px 13.10978071px, 9.36754001px 9.37871045px, 13.09416641px 6.17818017px, 17.28485237px 3.57411693px, 21.87374934px 1.63244779px, 26.79500879px .41909979px, 31.9827822px 5.30123935E-31px, 31.9827822px 0, 32.11152455px 0, 32.2175794px 0, 32.30094672px 0, 32.36162654px 0, 32.39961884px 0, 32.41492362px 0, 32.40754089px 0, 32.37747064px 0, 32.32471288px 0, 32.2492676px 0)",
      }}
      className="bg-gradient-to-b from-[#E8F5D3] to-[#F5FBEB] text-gray-800 pt-32 pb-10 px-6 md:px-16 w-[98%] mx-auto"
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
