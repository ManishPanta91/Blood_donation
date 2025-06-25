import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import Servicepage from "../Pages/Servicepage";
import Form from "../Components/form/Form";
import Contact from "../Pages/Contact";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<Servicepage />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
};

export default Router;
