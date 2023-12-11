import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { IoFootsteps, IoPeople } from "react-icons/io5";
import { MdOutlineHandshake } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiCelebrationFire } from "react-icons/gi";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let data = [
    {
      name: "Durga Path",
      img: "https://www.jagranimages.com/images/newimg/25092022/25_09_2022-durga_puja_1_23096804.jpg",
    },
    {
      name: "Vivah Puja",
      img: "https://bookmypooja.online/wp-content/uploads/2022/06/Wedding-Pandit-Book-My-Pooja.jpg",
    },
    {
      name: "Rudra Abhishek",
      img: "https://pujavidhis.com/wp-content/uploads/2021/08/Rudrabhishek.jpg",
    },
    {
      name: "Kal Sarp",
      img: "https://www.rudraksham.com/pub/media/catalog/product/k/a/kaalsarp.jpg",
    },
    {
      name: "Shiv Abhishek",
      img: "https://maharashtratimes.com/thumb/81432417/these-are-the-benefits-of-abhishek-on-shivling-81432417.jpg?imgsize=246129&width=1200&height=900&resizemode=75",
    },
    {
      name: "Laxmi Puja",
      img: "https://media.istockphoto.com/id/1314780179/photo/goddess-sculpture-in-indian-wedding.jpg?s=612x612&w=0&k=20&c=WijWhkJL7cfQSkrX-c8vntuUM-Faa_C8IFFF0xrAy4U=",
    },
  ];

  const settings = {
    accessibility: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let [counterOn, setcounterOn] = useState(false);

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
        <div className="w-6/12 text-end" data-aos="fade-up">
          <p className="text-[12vh] underline">The daksh platform</p>
        </div>
        <div
          className="w-6/12 text-8xl flex items-center justify-center"
          data-aos="fade-up"
        >
          <AiOutlineMessage className="hover:text-gray-400 outline outline-2 outline-offset-[20px] rounded-full" />
        </div>
      </div>

      <div className="py-20 flex">
        <div className="w-6/12 flex justify-end" data-aos="fade-up">
          <img
            src="https://technowebstore.com/daksh-wordpress/wp-content/uploads/2023/04/about-b-1.png"
            className="md:w-9/12 lg:h-full h-5/6"
          />
        </div>
        <div className="mx-10 w-6/12" data-aos="fade-up">
          <h1 className="text-4xl pt-5">Beginners Program</h1>
          <p className="py-4 text-xl">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>

          <div className="flex my-4">
            <div>
              <FiCheckCircle className="text-red-500 text-5xl" />
            </div>
            <div className="pl-4">
              <h3 className="font-semibold text-xl">Praise & Worship</h3>
              <p className="text-lg text-gray-600 py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec
              </p>
            </div>
          </div>

          <div className="flex my-4">
            <div>
              <FiCheckCircle className="text-red-500 text-5xl" />
            </div>
            <div className="pl-4">
              <h3 className="font-semibold text-xl">Hindus celebrate</h3>
              <p className="text-lg text-gray-600 py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec
              </p>
            </div>
          </div>

          <div className="flex my-4">
            <div>
              <FiCheckCircle className="text-red-500 text-5xl" />
            </div>
            <div className="pl-4">
              <h3 className="font-semibold text-xl">Prayers</h3>
              <p className="text-lg text-gray-600 py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-600 pt-14 px-24">
        <h1 className="text-white text-5xl capitalize" data-aos="fade-up">
          Our puja
        </h1>
        <p className="py-6 text-xl text-white w-6/12" data-aos="fade-up">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since
        </p>
        <div className="pt-4 flex">
          <Slider {...settings} className="w-[100%] spp:w-[90%] pp:w-[100%]">
            {data.map((e) => {
              return (
                <div className=" bg-yellow-400 pt-8 rounded-t-full border-4 border-red-600 h-[275px]">
                  <div>
                    <img
                      src={e.img}
                      className="rounded-full w-40 h-40 outline outline-2 outline-offset-8 outline-red-600 mx-auto block"
                    />
                  </div>
                  <p className="text-center text-xl pt-4">{e.name}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="py-10 px-24">
        <div className="flex w-[100%]">
          <div className="bg-red-600 py-16 px-6 text-white w-1/4">
            <IoFootsteps className="text-8xl" />
            <ScrollTrigger
              onEnter={() => {
                setcounterOn(true);
              }}
              onExit={() => {
                setcounterOn(false);
              }}
            >
              <div className="pt-4 font-bold text-4xl">
                {counterOn && (
                  <CountUp start={0} end={200} duration={2} delay={0} />
                )}
                +
              </div>
            </ScrollTrigger>
            <h1 className="pt-5 text-3xl font-bold pb-6">Unique Services</h1>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="bg-yellow-400 py-16 px-6 text-white w-1/4">
            <MdOutlineHandshake className="text-8xl" />
            <ScrollTrigger
              onEnter={() => {
                setcounterOn(true);
              }}
              onExit={() => {
                setcounterOn(false);
              }}
            >
              <div className="pt-4 font-bold text-4xl">
                {counterOn && (
                  <CountUp start={0} end={12} duration={2} delay={0} />
                )}
                +
              </div>
            </ScrollTrigger>
            <h1 className="pt-5 text-3xl font-bold pb-6">
              Years of Experience
            </h1>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="bg-red-600 py-16 px-6 text-white w-1/4">
            <IoFootsteps className="text-8xl" />
            <ScrollTrigger
              onEnter={() => {
                setcounterOn(true);
              }}
              onExit={() => {
                setcounterOn(false);
              }}
            >
              <div className="pt-4 font-bold text-4xl">
                {counterOn && (
                  <CountUp start={0} end={50} duration={2} delay={0} />
                )}
                +
              </div>
            </ScrollTrigger>
            <h1 className="pt-5 text-3xl font-bold pb-6">Pandits</h1>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="bg-yellow-400 py-16 px-6 text-white w-1/4">
            <IoFootsteps className="text-8xl" />
            <ScrollTrigger
              onEnter={() => {
                setcounterOn(true);
              }}
              onExit={() => {
                setcounterOn(false);
              }}
            >
              <div className="pt-4 font-bold text-4xl">
                {counterOn && (
                  <CountUp start={0} end={550} duration={2} delay={0} />
                )}
                +
              </div>
            </ScrollTrigger>
            <h1 className="pt-5 text-3xl font-bold pb-6">Puja and Homes</h1>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
