import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import InitialForm from "./components/InitialForm/InitialForm";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <InitialForm />
      <Cards />
    </>
  );
}

export default App;
