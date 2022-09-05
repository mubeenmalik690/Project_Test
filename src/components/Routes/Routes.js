import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialForm from "../InitialForm/InitialForm";
import Results from "../Results/Results";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialForm />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
      ,
    </>
  );
};

export default Routing;
