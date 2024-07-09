import React from "react";
import Image from "next/image";

import pizzaImage from "../../assets/pizza.png";

const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-gray-100 transition-all hover:shadow-md hover:shadow-black/25">
      <div>
        <Image
          src={pizzaImage}
          alt="pizza-item"
          className=" max-w-24 block mx-auto"
        />
      </div>

      <h4 className="text-xl font-semibold my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm mb-4">fkcfmkfmkcmf</p>
      <button className="bg-primary text-white rounded-full px-6 py-2">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;
