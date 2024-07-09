import Image from "next/image";
import React from "react";

import SaladImage from "../../assets/salad.png";
import SaladImage2 from "../../assets/salad2.png";

import MenuItem from "../menu/MenuItem";

const HomeMenu = () => {
  return (
    <section>
      <div>
        <div className="h-48 w-48 absolute left-0 top-80 -z-10">
          <Image src={SaladImage} alt={"salad-img"} />
        </div>

        <div className="flex justify-end h-48 w-48 absolute right-0 top-[250px] z-0">
          <Image src={SaladImage2} alt={"salad-img"} />
        </div>
      </div>

      <div className="text-center mb-4">
        <h3 className="leading-4 text-gray-600 uppercase font-semibold">
          Check Out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>

      <MenuItem />
    </section>
  );
};

export default HomeMenu;
