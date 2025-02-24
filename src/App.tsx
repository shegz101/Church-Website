import "./App.css";
import Footer from "./components/footer/Footer";
import { Nav } from "./components/header/Nav";
import Gallery from "./pages/Gallery";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
