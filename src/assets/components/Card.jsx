import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
  <div className="relative">
    &lt; Image className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1606813902494-4d3ef4d2ceea" "alt="Product Image"/&gt;
    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">25% OFF</span>
  </div>
  <div className="p-4 space-y-2">
    <h3 className="text-sm font-medium text-gray-800">Nothing Watch Pro 2 Smartwatch</h3>
    <p className="text-xs text-gray-500">Bluetooth Calling, 33.52mm AMOLED Display, IP68 Water Resistant</p>
    <div className="flex items-center space-x-2">
      <span className="text-lg font-bold text-gray-900">₹4,499</span>
      <span className="text-sm line-through text-gray-500">₹5,999</span>
    </div>
    <button className="w-full bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-indigo-700 transition">Add to Cart</button>
  </div>
</div>

    </div>
  )
}

export default Card
