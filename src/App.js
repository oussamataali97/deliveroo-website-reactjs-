import Discount from "./components/layouts/Discount";
import Features from "./components/layouts/Features";
import Footer from "./components/layouts/Footer";
import Gallery from "./components/layouts/Gallery";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Slider from "./components/layouts/Slider";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Slider/>
      <Features/>
      <Discount/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
