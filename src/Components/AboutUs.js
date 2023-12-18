import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoFootsteps, IoPeople } from "react-icons/io5";
import { MdOutlineHandshake } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiCelebrationFire } from "react-icons/gi";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let [counterOn, setcounterOn] = useState(false);

  let data2 = [
    {
      img: "https://static01.nyt.com/images/2023/09/21/multimedia/21cf-event-gates-recap-01-hmzj/21cf-event-gates-recap-01-hmzj-superJumbo.jpg",
      name: "Max Johnson",
      desi: "Senior Manager",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry psum is simply dummy text of the printing and typesetting industry",
    },
    {
      img: "https://www.hindustantimes.com/ht-img/img/2023/09/12/1600x900/Hillary-Clinton-White-House-0_1694523667951_1694524858451.jpg",
      name: "Harry Johnson",
      desi: "Head of idea",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry psum is simply dummy text of the printing and typesetting industry",
    },
    {
      img: "https://static01.nyt.com/images/2023/09/21/multimedia/21cf-event-gates-recap-01-hmzj/21cf-event-gates-recap-01-hmzj-superJumbo.jpg",
      name: "Ronny diaz",
      desi: "Senior Head Manager",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry psum is simply dummy text of the printing and typesetting industry",
    },
  ];

  const settings2 = {
    accessibility: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <>
      <div className="relative">
        <img
          src="https://cdn.wallpapersafari.com/99/98/hjKDla.jpg"
          className="w-full h-96"
        />
        <p className="absolute top-32 left-20 text-white text-4xl font-semibold">
          Home <span className="text-red-600 text-2xl"> >> </span> About Us
        </p>
      </div>

      <div className="py-20 md:flex">
        <div className="md:w-6/12" data-aos="fade-up">
          <img
            src="https://technowebstore.com/daksh-wordpress/wp-content/uploads/2023/04/about-b-1.png"
            className="h-96 mx-auto"
          />
        </div>
        <div className="mx-10 md:w-6/12" data-aos="fade-up">
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

      <div className="bg-gradient-to-b from-red-600 from-0% via-red-600 via-60% to-white to-40% py-12 px-8">
        <div className="pb-4 md:flex gap-4">
          <div>
            <h1 className="text-white text-2xl">Our Mission</h1>
            <p className="text-white py-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <h1 className="text-white text-2xl pt-4">Our Vision</h1>
            <p className="text-white pt-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
          <div className="py-4">
            <p className="py-5 text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="text-white md:pt-10">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>

        <div className="md:flex gap-4 overflow-hidden">
          <img
            src="https://cdn.sanity.io/images/nlpqts3z/production/e3b92acb9c0a3c0f0e3a5e62ef4ec63a687ffe4c-1920x931.jpg"
            className="h-96 w-full md:w-6/12 pb-4 md:pb-0 rounded-lg"
          />
          <img
            src="https://i.pinimg.com/originals/d3/e9/73/d3e9739ed4b414de1ce7813fe5339ba3.jpg"
            className="h-96 w-full md:w-6/12 rounded-lg"
          />
        </div>

        <div className="pt-8 md:flex w-full md:m-auto">
          <div className="md:w-6/12">
            <h1 className="text-2xl text-gray-700 font-semibold">
              "Hindus celebrate a number of other important festivals"
            </h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>

          <div className="pt-4 md:w-6/12 md:px-4 md:pt-0">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for ‘lorem ipsum’ will
              uncover many web sites still in their infancy.
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 lg:px-24 ">
        <div className="flex-row w-[100%] md:flex">
          <div className="bg-red-600 py-16 px-6 text-white w-full md:w-1/4">
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

          <div className="bg-yellow-400 py-16 px-6 text-white w-full md:w-1/4">
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

          <div className="bg-red-600 py-16 px-6 text-white w-full md:w-1/4">
            <IoIosPeople className="text-8xl" />
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

          <div className="bg-yellow-400 py-16 px-6 text-white w-full md:w-1/4">
            <GiCelebrationFire className="text-8xl" />
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

      <div className="md:gap-6 md:flex px-8 pb-8">
        <div className="pb-6 md:w-4/12 md:pb-0">
          <h1 className="text-4xl font-semibold">Our Testimonials</h1>
          <p className="py-7 text-xl font-semibold text-gray-800">
            Inspirational words from our very satisfactory clients
          </p>
          <div className="flex justify-end gap-4">
            <button className="px-3 py-3 text-white text-lg bg-red-600 rounded-full">
              <FaArrowLeft />
            </button>
            <button className="px-3 py-3 text-white text-lg bg-red-600 rounded-full">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="md:w-8/12">
          <Slider {...settings2}>
            {data2.map((e, i) => {
              return (
                <div className="bg-red-600 rounded-lg h-fit w-8/12 px-6 py-6">
                  <div className="flex">
                    <img src={e.img} className="h-24 w-24 rounded-full" />
                    <div className="pl-8">
                      <h1 className="text-yellow-400 text-2xl font-semibold">
                        {e.name}
                      </h1>
                      <p className="text-white">{e.desi}</p>
                    </div>
                  </div>
                  <p className="text-white pt-5">{e.about}</p>
                </div>
              );
            })}
          </Slider>
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
    </>
  );
};

export default AboutUs;
