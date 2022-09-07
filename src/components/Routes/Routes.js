import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import Hotels from "../Hotels/Hotels";
import InitialForm from "../InitialForm/InitialForm";
import Results from "../Results/Results";
import Services from "../Services/Services";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialForm />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
      ,
    </>
  );
};

export default Routing;
