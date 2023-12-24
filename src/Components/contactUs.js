import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";

const contactUs = () => {
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

      <div className="flex py-16 w-8/12 mx-auto gap-4">
        <div className="w-6/12">
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

        <div className="w-6/12">
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
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default contactUs;
