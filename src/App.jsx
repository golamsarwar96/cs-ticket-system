import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="max-w-300 mx-auto">
      {" "}
      <NavBar></NavBar>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
