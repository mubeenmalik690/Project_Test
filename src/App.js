import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import InitialForm from "./components/InitialForm/InitialForm";
import Cards from "./components/Cards/Cards";
import Holiday from "./components/Holidays/Holiday";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Airline from "./components/Airline/Airline";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <InitialForm />
      <Cards />
      <Holiday />
      <Gallery />
      <Airline />
      <Footer />
    </>
  );
}

export default App;
