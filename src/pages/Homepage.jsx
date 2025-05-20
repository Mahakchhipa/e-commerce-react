import React from "react";
// import Navbar from "../assets/components/Navbar";
import HeroSection from "../assets/components/HeroSection";
import IconCards from "../assets/components/IconCards";
import Card from "../assets/components/Card";
import Banner from "../assets/components/Banner";
// import Footer from "../assets/components/Footer";

const Homepage = (props) => {
  console.log(props.productdata)
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <IconCards />
      <div>
        <h1 className="text-4xl font-bold text-gray-900 text-center my-6 ">
          New Products
        </h1>
        <div className="grid grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-4 px-4  bg-amber-200 lg:my-12 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="grid grid-cols-1  m-4 md:grid-cols-2 lg:grid-cols-4 px-10 lg:px-5  bg-amber-200 lg:my-12 gap-5">
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
        <div className="grid grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-4 px-10 lg:px-5  bg-amber-200 lg:my-12 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="grid grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-4 px-10 lg:px-5  bg-amber-200 lg:my-12 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <IconCards/>
      {/* <Footer/> */}
    </div>
   
  );
};

export default Homepage;
