import React from "react";
import { AiOutlineMessage } from "react-icons/ai";

const home = () => {
  return (
    <>
      <div className="flex py-[21.5vh] bg-blue-100">
        <div className="w-6/12 h-full pl-10 pt-5">
          <h1 className="text-5xl w-4/5">
            We <span className="text-red-600">Hindus</span> believe In the
            Vedas.
          </h1>
          <p className="w-4/5 text-2xl pt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="w-6/12 relative flex items-center justify-center">
          <div className="h-[340px] bg-yellow-200 w-[340px] rounded-full outline outline-offset-8 outline-red-200">
            {/* <p></p> */}
            {/* <img
          src="https://technowebstore.com/daksh-wordpress/wp-content/uploads/2023/04/s-images.png"
        /> */}
          </div>
          <img
            src="https://technowebstore.com/daksh-wordpress/wp-content/uploads/2023/04/s-images.png"
            className="h-[380px] absolute top-25 left-45"
          />
        </div>
      </div>

      <div className="flex py-24 bg-red-600 text-white">
        <div className="w-6/12 text-end">
          <p className="text-[12vh] underline">The daksh platform</p>
        </div>
        <div className="w-6/12 text-8xl flex items-center justify-center">
          <AiOutlineMessage className="hover:text-gray-400 outline outline-2 outline-offset-[20px] rounded-full" />
        </div>
      </div>
    </>
  );
};

export default home;
