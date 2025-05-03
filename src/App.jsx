import React from "react";
import Navbar from "./assets/components/Navbar";
import HeroSection from "./assets/components/HeroSection";
import Footer from "./assets/components/Footer";
import Banner from "./assets/components/Banner";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
