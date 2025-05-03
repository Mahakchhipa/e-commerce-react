import React from "react";

import Card from "../components/Card";

const WishList = () => {
  return (
    <div className="bg-gray-100 m-20 rounded-3xl shadow-blue-300 shadow-2xl">
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center text-red-700  font-bold italic mb-6">
            My Wishlist
          </h2>
          {/* Wishlist Items */}
          <div className="grid grid-cols-3 gap-8 ">
            <Card />
            <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />{" "}
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WishList;
