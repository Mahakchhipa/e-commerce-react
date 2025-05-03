import React from "react";
import Navbar from "../assets/components/Navbar";
import HeroSection from "../assets/components/HeroSection";
import IconCards from "../assets/components/IconCards";
import Card from "../assets/components/Card";
import Banner from "../assets/components/Banner";
import Footer from "../assets/components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <IconCards />
      <div>
        <h1 className="text-4xl font-bold text-gray-900 text-center my-6 ">
          New Products
        </h1>
        <div className="flex flex-wrap  gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex flex-wrap  my-12 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Banner/>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 text-center my-6 ">
          New Products
        </h1>
        <div className="flex flex-wrap  gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex flex-wrap  my-12 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <IconCards/>
      <Footer/>
    </div>
   
  );
};

export default Homepage;
