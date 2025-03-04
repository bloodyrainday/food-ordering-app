import React from "react";

const SectionHeaders = ({ subHeader, mainHeader }) => {
  return (
    <>
      <h3 className="leading-4 text-gray-600 uppercase font-semibold">
        {subHeader}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
    </>
  );
};

export default SectionHeaders;
