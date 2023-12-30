import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../Components/home"));
const AboutUs = lazy(() => import("../Components/AboutUs"));
const OurPuja = lazy(() => import("../Components/OurPuja"));
const OurPages = lazy(() => import("../Components/OurPages"));
const ContactUs = lazy(() => import("../Components/contactUs"));
const Error = lazy(() => import("../Components/Error"));
const DurgaPath = lazy(() => import("../Components/DurgaPath"));
const Kalsarp = lazy(() => import("../Components/Kalsarp"));
const Laxmi = lazy(() => import("../Components/Laxmi"));
const Rudra = lazy(() => import("../Components/Rudra"));
const Shiv = lazy(() => import("../Components/Shiv"));
const Vivah = lazy(() => import("../Components/Vivah"));

const AllRoutes = () => {
  return (
    <Suspense fallback={<div className="text-3xl font-semibold flex justify-center text-gray-700 pt-20">Loading....</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourpuja" element={<OurPuja />} />
        <Route path="/pages" element={<OurPages />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/durga" element={<DurgaPath />} />
        <Route path="/kal" element={<Kalsarp />} />
        <Route path="/laxmi" element={<Laxmi />} />
        <Route path="/rudra" element={<Rudra />} />
        <Route path="/shiv" element={<Shiv />} />
        <Route path="/vivah" element={<Vivah />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
