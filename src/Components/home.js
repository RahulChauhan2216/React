import React from "react";

const home = () => {
  return (
    <>
      <div className="flex h-[670px] py-14 bg-blue-100">
        <div className="w-6/12 h-full pt-44 pl-10">
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
    </>
  );
};

export default home;
