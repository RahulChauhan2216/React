import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";

const ContactUs = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="relative">
        <img
          src="https://aiwalls.ai/wp-content/uploads/2023/10/maa-brahmacharini-indian-goddess-9_auto_x2_toned_light_ai.jpg"
          className="w-full h-[500px]"
        />
        <div className="absolute top-36 left-20">
          <h1 className="text-white text-4xl font-semibold pb-4">Contact Us</h1>
          <p className=" text-white text-2xl font-semibold">
            Home <span className="text-red-600 text-2xl"> >> </span> Contact Us
          </p>
        </div>
      </div>

      <div className="md:flex py-16 w-8/12 mx-auto gap-4">
        <div className="md:w-6/12">
          <h1 className="text-3xl font-semibold">Contact Us Now</h1>
          <label className="text-lg block pt-4">Your name</label>
          <input
            type="text"
            className="py-2 border-2 border-gray-500 w-8/12 block"
          ></input>
          <label className="text-lg block pt-4">Your email</label>
          <input
            type="email"
            className="py-2 border-2 border-gray-500 w-8/12 block"
          ></input>
          <label className="text-lg block pt-4">Subject</label>
          <input
            type="text"
            className="py-2 border-2 border-gray-500 w-8/12 block"
          ></input>
          <label className="text-lg block pt-4">Your Message (optional)</label>
          <textarea
            rows={4}
            className="rounded-sm my-5 pl-3 py-2 resize-none border-2 border-gray-500 w-8/12 block"
          />
          <button className="w-full bg-gray-300 py-3">Submit</button>
        </div>

        <div className="md:w-6/12">
          <h1 className="text-3xl font-semibold">Contact Info</h1>
          <p className="py-4">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          {/* <div className="py-8"> */}
          <div className="flex gap-4 pt-6">
            <div>
              <FaPhoneVolume className="h-full text-4xl text-red-600" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">
                Call us on: +1 3333 *** 444
              </h1>
              <p>Our office hours are Monday – Friday, 9 am-6 pm</p>
            </div>
          </div>
          {/* ----- */}
          <div className="flex gap-4 pt-6">
            <div>
              <HiOutlineMailOpen className="h-full text-4xl text-red-600" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Email us directly</h1>
              <p>info@example.com</p>
            </div>
          </div>
          {/* ---- */}
          <div className="flex gap-4 pt-6">
            <div>
              <MdOutlineLocationOn className="h-full text-4xl text-red-600" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Our Location</h1>
              <p>
                4th floor, E-160, West College St. 66 Code New York, United
                States
              </p>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448559.38960003166!2d76.57225210969426!3d28.55864323290704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1703439517238!5m2!1sen!2sin"
        height="450"
        width="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="pb-16"
      ></iframe>

      <div className="bg-red-600 px-24 py-12 w-full lg:flex">
        <div className="lg:w-3/12 mr-5">
          <h1 className="text-white text-3xl font-semibold">Get in touch</h1>
          <p className="pt-6 flex text-white text-lg">
            <span className="text-yellow-400 text-3xl pr-3">
              <IoLocationOutline />
            </span>
            4th floor,E-160,West College St. 66 Code New York, United States
          </p>
          <p className="pt-6 flex text-white text-lg">
            <span className="text-yellow-400 text-3xl pr-3">
              <FaPhoneVolume />
            </span>
            +1 3333 ** 444
          </p>
          <p className="pt-6 flex text-white text-lg">
            <span className="text-yellow-400 text-3xl pr-3">
              <HiOutlineMailOpen />
            </span>
            info@example.com
          </p>
        </div>
        {/* -- */}
        <div className="lg:w-3/12 mr-5 mt-8 lg:mt-0">
          <h1 className="text-white text-3xl font-semibold">Company</h1>
          <p className="pt-4 text-white text-lg">About</p>
          <p className="pt-4 text-white text-lg">Meet Out Team</p>
          <p className="pt-4 text-white text-lg">Our Portfolio</p>
          <p className="pt-4 text-white text-lg">Latest News</p>
          <p className="pt-4 text-white text-lg">Stores</p>
        </div>

        {/* ----- */}
        <div className="lg:w-3/12 mr-5 mt-8 lg:mt-0">
          <h1 className="text-white text-3xl font-semibold">Information</h1>
          <p className="pt-4 text-white text-lg">Our Leader</p>
          <p className="pt-4 text-white text-lg">Press Media</p>
          <p className="pt-4 text-white text-lg">FAQs</p>
          <p className="pt-4 text-white text-lg">Partner Program</p>
          <p className="pt-4 text-white text-lg">Browse library</p>
        </div>
        {/* -- */}
        <div className="lg:w-3/12 mt-8 lg:mt-0">
          <h1 className="text-white text-3xl font-semibold">Resources</h1>
          <p className="pt-4 text-white text-lg">Support</p>
          <p className="pt-4 text-white text-lg">Privacy Policy</p>
          <p className="pt-4 text-white text-lg">Terms of Use</p>
          <p className="pt-4 text-white text-lg">Help</p>
        </div>
      </div>

      <div className="flex justify-around items-center py-8 bg-yellow-400 font-semibold">
        <p className="px-4">
          Copyright © 2023 Daksh-wordpress | Powered by Daksh-wordpress
        </p>
        <button
          className="px-4 py-4 bg-red-600 rounded-full mx-3"
          onClick={toTop}
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
