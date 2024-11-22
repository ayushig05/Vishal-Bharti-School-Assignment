import Navbar from "./components/navbar";
import TextSlider from "./components/textslider";
import About from "./components/about";
import Slider from "./components/slider";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App bg-gradient-to-r from-red-200 via-red-100 to-red-50">
      <Navbar />
      <TextSlider />
      <About />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
