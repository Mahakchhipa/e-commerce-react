import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-indigo-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Upgrade Your Tech Today
            </h1>
            <p className="text-lg text-gray-600">
              Discover the latest in electronics with unbeatable deals and top
              brands.
            </p>
            <a
              href="#"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
            >
              Shop Now
            </a>
          </div>
          <div className="relative">
            <img
             src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1746190988/Croma%20Assets/CMS/LP%20Page%20Banners/2025/campaigns/Summer%20saving%20days%20april/Day%203%2C4/Desktop/LP_Summer_Category_Fans_3May2025_zjbesr.png"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
