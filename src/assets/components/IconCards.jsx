import React from "react";

const IconCards = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="flex flex-col items-center bg-white rounded-xl shadow hover:shadow-md transition p-4 w-28">
          <Image
            src='https://cdn-icons-png.flaticon.com/512/1041/1041916.png" '
            alt="Smartphones"
            className="w-10 h-10 mb-2"
          />
          <span className="text-sm text-gray-700 text-center">Smartphones</span>
        </div>

        <div className="flex flex-col items-center bg-white rounded-xl shadow hover:shadow-md transition p-4 w-28">
          <Image
            src='https://cdn-icons-png.flaticon.com/512/1041/1041916.png"'
            alt="Laptops"
            className="w-10 h-10 mb-2"
          />
          <span className="text-sm text-gray-700 text-center">Laptops</span>
        </div>

        <div className="flex flex-col items-center bg-white rounded-xl shadow hover:shadow-md transition p-4 w-28">
          <Image
            src='https://cdn-icons-png.flaticon.com/512/1041/1041916.png"'
            alt="Accessories"
            className="w-10 h-10 mb-2"
          />
          <span className="text-sm text-gray-700 text-center">Accessories</span>
        </div>
      </div>
    </div>
  );
};

export default IconCards;
