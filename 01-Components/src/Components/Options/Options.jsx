import React from "react";
import { FaCheck } from "react-icons/fa";
const Options = ({ plan }) => {
  const { price, planName, features } = plan;
  return (
    <div>
      <div className="bg-gray-950  rounded-2xl p-10 w-72 md:w-80 lg:w-96 flex flex-col h-full">
        <h1 className="text-4xl text-center font-bold text-white pb-5">
          ${price} <span className="text-xl">/mon</span>
        </h1>
        <h1 className="text-center text-white text-3xl pb-5">{planName}</h1>
        <ul className="flex-grow">
          {features.map((feature) => (
            <li className="flex-grow flex gap-2 items-center">
              <span className="text-accent">
                <FaCheck />
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <button className="btn btn-accent mt-5 w-full">BUY NOW</button>
      </div>
    </div>
  );
};

export default Options;
