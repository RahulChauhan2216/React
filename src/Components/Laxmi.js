import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaArrowUp } from "react-icons/fa";

const Laxmi = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="relative">
        <img
          src="https://images.thequint.com/thequint%2F2019-10%2F1a56a713-1ab0-446c-a626-1d0615656a28%2FiStock_1045266428.jpg?rect=0%2C0%2C2116%2C1190&auto=format%2Ccompress&fmt=webp&width=120&w=1200"
          className="w-full h-[500px]"
        />
        <div className="absolute top-36 left-20">
          <h1 className="text-white text-4xl font-semibold pb-4">Our Puja</h1>
          <p className=" text-white text-2xl font-semibold">
            Home <span className="text-red-600 text-2xl"> >> </span> Laxmi Puja
          </p>
        </div>
      </div>

      <div className="py-14 w-8/12 mx-auto lg:flex gap-6">
        <div className="lg:w-[60%]">
          <h1 className="text-2xl font-semibold text-justify">
            If we honour God by performing His puja in an appropriate manner,
            just as the respectful way in which we treat a guest,
          </h1>
          <p className="py-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English.
          </p>
          <img src="https://technowebstore.com/daksh-wordpress/wp-content/uploads/2023/04/ab-1.png" />

          <p className="py-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English.
          </p>

          <h1 className="text-2xl font-semibold text-justify">
            Then God will be pleased with us and shower His abundant grace upon
            us.
          </h1>

          <p className="py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <div className="flex gap-4 overflow-hidden">
            <img
              src="https://technowebstore.com/daksh-wordpress/wp-content/uploads/2023/03/bl-2.png"
              className="w-6/12"
            />
            <img
              src="https://technowebstore.com/daksh-wordpress/wp-content/uploads/2023/03/bl-1.png"
              className="w-6/12"
            />
          </div>

          <p className="py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* ----- */}

        <div className="bg-yellow-300 px-10 pt-6 pb-16 border-2 lg:w-[40%] h-fit">
          <h1 className="text-2xl font-semibold pb-3">Request for Help</h1>
          <input
            type="text"
            className="w-full rounded-sm py-2 pl-3"
            placeholder="Name"
          ></input>
          <input
            type="email"
            className="w-full rounded-sm my-5 pl-3 py-2"
            placeholder="Email"
          ></input>
          <input
            type="number"
            className="w-full rounded-sm pl-3 py-2"
            placeholder="Mobile"
          ></input>
          <textarea
            rows={4}
            className="w-full rounded-sm my-5 pl-3 py-2 resize-none"
            placeholder="Message"
          />
          <button className="bg-red-600 text-white px-4 py-2 w-full text-lg block mx-auto">
            Submit
          </button>
        </div>
      </div>

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

export default Laxmi;
