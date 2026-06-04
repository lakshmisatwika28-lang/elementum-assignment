import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Progress from "./components/Progress/Progress";
import Offer from "./components/Offer/Offer";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Progress />
      <Offer />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;