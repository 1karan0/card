import React from 'react';

const Card = ({ heading, para,price}) => {
  return (
    <div className="w-full overflow-hidden shadow-lg bg-white rounded-[30px]">
      {/* Image Container with Hover Effect */}
      <div className="relative group hover:cursor-pointer">
        <img
          src="rec.png" // Replace with your image URL
          alt="Digital Marketing"
          className="w-full h-full object-cover"
        />

        {/* Cart Icon - Always Visible */}
        <div className="absolute top-4 right-4 hover:cursor-pointer">
          <a href="https://hopingminds.com/"><button>
            <img src="cart.png" alt="Cart Icon" className="w-8 h-8" />
          </button></a>
        </div>

        {/* Price Overlay - Hidden by Default, Show on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <div className="text-center">
            <h2 className="text-white text-3xl font-bold">{price}</h2>
            <a href="https://hopingminds.com/"><button>
            <img src="cart.png" alt="Cart Icon" className="w-8 h-8" />
          </button></a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{heading}</h2>
        <p>{para}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 ">
        <div className="flex items-center space-x-2 flex-col">
          <img src="advance.png" alt="Advance Icon" className="w-7" />
          <span className="text-gray-800">Advance</span>
        </div>

        <div className="flex items-center flex-col">
          <img src="hybrid.png" alt="Hybrid Icon" className="w-9" />
          <span className="text-gray-800">Hybrid</span>
        </div>

        <div className="flex items-center space-x-2 flex-col">
          <img src="240.png" alt="Clock Icon" className="w-7" />
          <span className="text-gray-800">240 Hrs</span>
        </div>
      </div>

      {/* Enroll Button */}
      <div className="p-4">
        <button className="px-10 py-4 bg-green-500 w-full rounded-xl hover:bg-green-600 transition-all duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Card;
