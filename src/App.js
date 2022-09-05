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
import Routing from "./components/Routes/Routes";

function App() {
  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
