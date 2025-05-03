import React from "react";
import Navbar from "../assets/components/Navbar";
import WishList from "../assets/components/WishList";
import Footer from "../assets/components/Footer";

const WishListPage = () => {
  return (
    <div className="bg-blue-200">
      <Navbar />
      <WishList />
      <Footer />
    </div>
  );
};

export default WishListPage;
