import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCard from "./RightCard";
const rightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full w-2/3 p-6  rounded-4xl overflow-x-auto flex flex-nowrap gap-10 "
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            color={elem.color}
            id={idx}
            img={elem.img}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default rightContent;
