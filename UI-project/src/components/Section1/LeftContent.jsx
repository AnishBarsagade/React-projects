import React from "react";
import "remixicon/fonts/remixicon.css";
const leftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3 bg-blue-300">
      <div>
        <h3 className="mb-5 text-6xl font-bold">
          Prospective <br />
          <span> Customer</span>
          <br />
          segmentation
        </h3>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatum et commodi inventore rerum cupiditate nobis quas ipsam quae
          quasi!
        </p>
      </div>
      <div className="text-8xl">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default leftContent;
