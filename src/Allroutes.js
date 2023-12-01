import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import AboutUs from "./AboutUs";
import OurPuja from "./OurPuja";
import OurPages from "./OurPages";
import ContactUs from "./contactUs";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourpuja" element={<OurPuja />} />
        <Route path="/pages" element={<OurPages />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
