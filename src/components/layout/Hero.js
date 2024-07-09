import React from "react";
import pizzaImage from "../../assets/pizza.png";

import Image from "next/image";
import RightArrow from "../icons/RightArrow";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold mb-6">
          Everything <br /> is better <br />
          with a <span className="text-primary">Pizza</span>
        </h1>
        <p className="text-gray-500 mb-6 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex text-sm">
          <button className="flex gap-2 bg-primary text-white px-4 py-2 rounded-full uppercase items-center">
            Order now <RightArrow />
          </button>
          <button className="flex gap-2 font-semibold text-gray-600 px-4 py-2 rounded-full">
            Learn now <RightArrow />
          </button>
        </div>
      </div>

      <div className="relative z-10">
        <Image
          src={pizzaImage}
          alt={"pizza-img"}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Hero;
