import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Components/AboutUs";
import OurPuja from "../Components/OurPuja";
import OurPages from "../Components/OurPages";
import ContactUs from "../Components/contactUs";
import Error from "../Components/Error";
import Home from "../Components/home";
import DurgaPath from "../Components/DurgaPath";
import Kalsarp from "../Components/Kalsarp";
import Laxmi from "../Components/Laxmi";
import Rudra from "../Components/Rudra";
import Shiv from "../Components/Shiv";
import Vivah from "../Components/Vivah";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourpuja" element={<OurPuja />} />
        <Route path="/pages" element={<OurPages />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/durga" element={<DurgaPath />} />
        <Route path="/kal" element={<Kalsarp />} />
        <Route path="/laxmi" element={<Laxmi />} />
        <Route path="/rudra" element={<Rudra />} />
        <Route path="/shiv" element={<Shiv />} />
        <Route path="/vivah" element={<Vivah />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
