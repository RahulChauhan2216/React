import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Components/AboutUs";
import OurPuja from "../Components/OurPuja";
import OurPages from "../Components/OurPages";
import ContactUs from "../Components/contactUs";
import Error from "../Components/Error";
import Home from "../Components/home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourpuja" element={<OurPuja />} />
        <Route path="/pages" element={<OurPages />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
