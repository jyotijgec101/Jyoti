import React from "react";

const SupportCard = (props) => {
  return (
    <div class=" lg:w-[450px] overflow-hidden lg:h-64 md:h-64 border-[6px] mt-10  mb-8  hover:scale-105 transition-transform border-slate-700 relative ">
      <img src={props.img} className="" alt="" />
      <div class="absolute bottom-0 left-0 right-0 px-2 py-2 bg-gray-800 opacity-70">
        <h3 class="lg:text-xl text-white text-center font-bold">
          {props.title}
        </h3>
      </div>
    </div>
  );
};

export default SupportCard;
