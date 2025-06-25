import React from "react";
import Navbar from "../Components/Navbar";
import Router from "../Router/Router";
import Hero from "../Components/Body/Hero";
import Detail from "../Components/Body/Detail";
import About from "../Components/Body/About";
import Test from "../Components/Body/Test";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
     

      <Router />
      <Footer />
    </>
  );
};

export default Layout;
