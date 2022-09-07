import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
