import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import qoute from "../assets/images/quotes.png";
import customer from "../assets/images/customer.png";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios("/testimonial.json").then((res) => {
      setTestimonials(res.data);
    });
  }, []);


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="w-11/12 mx-auto bg-[#F4F6F0] px-0 lg:px-10 pb-16 lg:pb-32 pt-6 rounded-4xl my-20 font-p">
      <div className="text-center my-10 space-y-5">
        <h4>TESTIMONIALS</h4>
        <h2 data-aos="fade-up" data-aos-duration="1000" className="text-2xl lg:text-4xl w-full lg:w-6/12 mx-auto font-medium">
          Empowering Thousands of Users and Enterprises
        </h2>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        itemClass="px-5"
        arrows={true}
        containerClass="carousel-container"
        showDots={true}
      >
        {testimonials.map((testimonial, idx) => (
          <div data-aos="zoom-in" data-aos-duration="1000"    key={idx} className="bg-white px-8 md:px-20 py-14 rounded-4xl mb-10">
            <img className="w-6 mb-8" src={qoute} alt="" />
            <p>{testimonial.feedback}</p>
            <div className="flex gap-5 items-center mt-6">
              <div className="avatar">
                <div className="w-12 rounded-full bg-[#F4F6F0] p-2">
                  <img src={customer} />
                </div>
              </div>
              <div>
                <h4 className="font-[600]">{testimonial.name}</h4>
                <h5 className="font-o font-light">{testimonial.role}</h5>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
