import React from "react";

const navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-18">
      <h4 className="bg-black text-white uppercase px-6 py-3 rounded-full ">
        Target Audience
      </h4>
      <button className="bg-grey-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default navbar;
