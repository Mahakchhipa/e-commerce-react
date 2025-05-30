import React from "react";

const Navbar = () => {
  return (
    <div>
  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex-shrink-0">
          <a href="#" className="text-2xl font-bold text-indigo-600">
            CromaX
          </a>
        </div>
        <div className="w-full max-w-md mx-6 hidden md:block">
          <input type="text" placeholder="Search for products..." className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div className="flex items-center space-x-6">
          <a href="/" className="text-gray-700 hover:text-indigo-600 font-medium text-sm hidden md:inline">
            Login
          </a>
          <a href="/signup" className="text-gray-700 hover:text-indigo-600 relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              <circle cx={9} cy={21} r={1} />
              <circle cx={20} cy={21} r={1} />
            </svg>
          </a>
        </div>
      </div>
      <div className="hidden md:flex justify-center space-x-8 py-2 border-t border-gray-200 text-sm text-gray-700">
        <a href="/mobile" className="hover:text-indigo-600">
          Mobiles
        </a>
        <a href="/laptoppage" className="hover:text-indigo-600">
          Laptops
        </a>
        <a href="/tvsPage" className="hover:text-indigo-600">
          TVs
        </a>
        <a href="/appliancePage" className="hover:text-indigo-600">
          Appliances
        </a>
        <a href="/accessoriesPage" className="hover:text-indigo-600">
          Accessories
        </a>
      </div>
    </div>
  </nav>
</div>

  );
};

export default Navbar;
