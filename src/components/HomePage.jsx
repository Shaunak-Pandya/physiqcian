import React, { useEffect, useState } from "react";
// import useApiCall from "../controller/useApiCall";
// import AboutUs from "./AboutUs";
import Appointment from "./Appointment";
import Contact from "./Contact";
import Departments from "./Departments";
import Doctors from "./Doctors";
import FAQs from "./FAQs";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import TopBar from "./TopBar";
import WhyUs from "./WhyUs";
import constants from "../utils/constants";

function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(constants);
  }, []);
  return (
    <>
      <TopBar data={constants} />
      <Header data={constants} />

      <section id="hero" className="d-flex align-items-center">
        <Hero />
      </section>

      <main id="main">
        <section id="why-us" className="why-us">
          <WhyUs />
        </section>

        {/* <section id="about" className="about">
          <AboutUs />
        </section> */}

        <section id="services" className="services">
          <Services />
        </section>

        <section id="departments" className="departments">
          <Departments />
        </section>

        <section id="appointment" className="appointment section-bg">
          <Appointment />
        </section>

        <section id="doctors" className="doctors">
          <Doctors />
        </section>

        <section id="faq" className="faq section-bg">
          <FAQs />
        </section>

        <section id="gallery" className="gallery">
          <Gallery />
        </section>

        <section id="contact" className="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
