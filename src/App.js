import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import InitialForm from "./components/InitialForm/InitialForm";
import Cards from "./components/Cards/Cards";
import FlightDetails from "./components/InitialForm/FlightDetails";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <InitialForm />
      <Cards />
      <FlightDetails />
    </>
  );
}

export default App;
