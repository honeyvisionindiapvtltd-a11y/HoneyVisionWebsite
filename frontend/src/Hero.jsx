import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import VisionMission from "./components/VisionMission"
import Whychooseus from "./components/Whychooseus";
import Testimonals from "./components/Testimonals";
// import Product from "./components/Product";
// import Technology from "./components/Technology";
// import Service from "./components/Service";
import Contact from "./components/Contact";


const Hero = () => {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="vision">
        <VisionMission />
      </section>


      {/* <section id="products">
        <Product />
      </section>

      <section id="technology">
        <Technology />
      </section>

      <section id="services">
        <Service />
      </section> */}

      <section id="whychooseus">
        <Whychooseus />
      </section>

      <section id="vision">
        <Testimonals />
      </section>


      <section id="contact">
        <Contact />
      </section>

    </>
  );
};

export default Hero;