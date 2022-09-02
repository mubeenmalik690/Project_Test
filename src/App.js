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

function App() {
  const [cityCode, setCityCode] = useState([]);

  // useEffect(() => {
  //   getCityData();
  // }, []);

  // const getCityData = () => {
  //   axios
  //     .get(
  //       "https://cors-anywhere-thud.herokuapp.com/https://api.flightstats.com/flex/airports/rest/v1/json/all?appId=4af09662&appKey=d7d4dd168c63fb2101fe6fdfa8d52a2e"
  //     )
  //     .then((res) => {
  //       console.log("data:", res.data.airports);
  //       setCityCode(res.data.airports);
  //       console.log("settled city codes", cityCode);
  //       // setTimeout(() => {
  //       //   setCityCode(res.data.airports);
  //       //   console.log(cityCode, "settled city code");
  //       // }, 3000);
  //     });
  // };

  return (
    <>
      <Header />
      <Slider />
      {/* <InitialForm cityCode={cityCode} setCityCode={setCityCode} /> */}
      <Cards />
      <Holiday />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
