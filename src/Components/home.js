import React from "react";
import { Link, NavLink } from "react-router-dom";
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
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let data = [
    {
      name: "Durga Path",
      img: "https://www.jagranimages.com/images/newimg/25092022/25_09_2022-durga_puja_1_23096804.jpg",
      link: "/durga",
    },
    {
      name: "Vivah Puja",
      img: "https://bookmypooja.online/wp-content/uploads/2022/06/Wedding-Pandit-Book-My-Pooja.jpg",
      link: "/vivah",
    },
    {
      name: "Rudra Abhishek",
      img: "https://pujavidhis.com/wp-content/uploads/2021/08/Rudrabhishek.jpg",
      link: "/rudra",
    },
    {
      name: "Kal Sarp",
      img: "https://www.rudraksham.com/pub/media/catalog/product/k/a/kaalsarp.jpg",
      link: "/kal",
    },
    {
      name: "Shiv Abhishek",
      img: "https://maharashtratimes.com/thumb/81432417/these-are-the-benefits-of-abhishek-on-shivling-81432417.jpg?imgsize=246129&width=1200&height=900&resizemode=75",
      link: "/shiv",
    },
    {
      name: "Laxmi Puja",
      img: "https://media.istockphoto.com/id/1314780179/photo/goddess-sculpture-in-indian-wedding.jpg?s=612x612&w=0&k=20&c=WijWhkJL7cfQSkrX-c8vntuUM-Faa_C8IFFF0xrAy4U=",
      link: "/laxmi",
    },
  ];

  let data1 = [
    {
      name: "Masik Shivratri",
      data: "April 22,2023",
      bio: "Masik Shivratri is the great festival of convergence of Shiva and Shakti.Every month chat",
      img: "https://www.templepurohit.com/wp-content/uploads/2017/06/Masik-Shivaratri-Dates-Vrat-Vidhi-Benefits-and-Importance.jpg",
    },
    {
      name: "Pradosh Vrat",
      data: "April 28,2023",
      bio: "Masik Shivratri is the great festival of convergence of Shiva and Shakti.Every month chat",
      img: "https://akm-img-a-in.tosshub.com/aajtak/images/story/202101/shiva_thumb-sixteen_nine.jpg?size=948:533",
    },
    {
      name: "Mesha Sankranti",
      data: "April 02,2023",
      bio: "Masik Shivratri is the great festival of convergence of Shiva and Shakti.Every month chat",
      img: "https://images.mypandit.com/myPandit_web/images/Content/Mesha-Sankranti.webp",
    },
    {
      name: "Masik Shivratri",
      data: "April 22,2023",
      bio: "Masik Shivratri is the great festival of convergence of Shiva and Shakti.Every month chat",
      img: "https://www.clickastro.com/blog/wp-content/uploads/2021/02/Masik-Shivratri-1200x720.jpg",
    },
  ];

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

  let data3 = [
    {
      date: "April 22,2023",
      bio: "When worshipped with devotion, God gives inner peace and enables worshippers",
      img: "https://media.istockphoto.com/id/1179778264/photo/diwali-hindu-festival-of-lights-celebration-diya-oil-lamp-against-dark-background.jpg?s=612x612&w=0&k=20&c=eX_VChU2Gd9Da_AELqA3A1IaKGsNXU3g82qoF5IZrrE=",
    },
    {
      date: "April 28,2023",
      bio: "There are different ways to worship Lord Shiva.",
      img: "https://www.saivism.net/images/worship.jpg",
    },
    {
      date: "April 02,2023",
      bio: "Devotees pray to the Lord to seek mercy and benevolence and overcome",
      img: "https://vedicyogawisdom.com/wp-content/uploads/2021/12/Krishna-and-Madhavendra-Puri-Copy.jpg",
    },
    {
      date: "April 22,2023",
      bio: "Lord Shiva, also known as the Rudra, is the destroyer of evil.",
      img: "https://www.mythoworld.com/wp-content/uploads/2021/03/Lord-Shiva-Tandav-Desktop-Image-HD-e1615450764949.jpeg",
    },
  ];

  const settings = {
    accessibility: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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

  const settings1 = {
    accessibility: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    accessibility: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 980,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 700,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const settings3 = {
    accessibility: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
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
            {data.map((e, i) => {
              return (
                <div
                  key={i}
                  className=" bg-yellow-400 pt-8 rounded-t-full h-[275px]"
                >
                  <Link to={e.link}>
                    <img
                      src={e.img}
                      className="rounded-full w-40 h-40 outline outline-2 outline-offset-8 outline-red-600 mx-auto"
                    />
                  </Link>
                  <Link to={e.link}>
                    <p className="text-center text-xl pt-4">{e.name}</p>
                  </Link>
                </div>
              );
            })}
          </Slider>
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

      <div className="py-24 px-24 bg-gradient-to-b from-red-600 from-0% via-red-600 via-60% to-white to-40%">
        <h1 className="text-white text-6xl font-semibold">
          Upcoming Festivals
        </h1>
        <p className="w-6/12 py-4 text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since
        </p>

        <Slider {...settings1} className="w-[100%] rounded-lg">
          {data1.map((e, i) => {
            return (
              <div
                key={i}
                className="pt-12 pb-4 px-3 w-6/12 rounded-xl shadow-lg bg-white"
              >
                <img src={e.img} className="h-40 w-40 mx-auto rounded-full" />
                <h1 className="text-2xl pt-8 text-center font-semibold">
                  {e.name}
                </h1>
                <p className="py-2 text-center text-red-600">{e.data}</p>
                <p className="mx-auto text-center">{e.bio}</p>
                <p className="pt-6 text-center">Read More</p>
              </div>
            );
          })}
        </Slider>
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

      <div className="py-24 px-24 bg-gradient-to-b from-red-600 from-0% via-red-600 via-60% to-white to-40%">
        <h1 className="text-white text-5xl font-semibold">Our Blogs</h1>
        <p className="w-6/12 py-6 text-white text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since
        </p>
        <Slider {...settings3} className="w-full">
          {data3.map((e, i) => {
            return (
              <div className="bg-yellow-300 rounded-lg w-6/12 px-4 py-4 h-[450px]">
                <img src={e.img} className="rounded-lg h-60 w-full" />
                <p className="text-red-600 py-4 text-sm font-semibold">
                  {e.date}
                </p>
                <p className="text-xl">{e.bio}</p>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="bg-red-600 px-24 py-12 w-full lg:flex">
        <div className="w-3/12 mr-5">
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
        <div className="w-3/12 mr-5 mt-8 lg:mt-0">
          <h1 className="text-white text-3xl font-semibold">Company</h1>
          <p className="pt-4 text-white text-lg">About</p>
          <p className="pt-4 text-white text-lg">Meet Out Team</p>
          <p className="pt-4 text-white text-lg">Our Portfolio</p>
          <p className="pt-4 text-white text-lg">Latest News</p>
          <p className="pt-4 text-white text-lg">Stores</p>
        </div>

        {/* ----- */}
        <div className="w-3/12 mr-5 mt-8 lg:mt-0">
          <h1 className="text-white text-3xl font-semibold">Information</h1>
          <p className="pt-4 text-white text-lg">Our Leader</p>
          <p className="pt-4 text-white text-lg">Press Media</p>
          <p className="pt-4 text-white text-lg">FAQs</p>
          <p className="pt-4 text-white text-lg">Partner Program</p>
          <p className="pt-4 text-white text-lg">Browse library</p>
        </div>
        {/* -- */}
        <div className="w-3/12 mt-8 lg:mt-0">
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

export default Home;
