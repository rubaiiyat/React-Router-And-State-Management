import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FcSalesPerformance } from "react-icons/fc";
import { MdOutlineEngineering } from "react-icons/md";
const JobCategory = () => {
  return (
    <div className="text-center md:mx-32 px-4 text-white">
      <h1 className="text-4xl md:text-6xl mt-5 mb-5 font-bold">
        Job Category List
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Explore thousands of job opportunities with all the information you
        need. It's your future, shape it wisely.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-10">
        <div className="text-start border border-gray-700 p-5 bg-base-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-4xl mb-4 bg-base-300 p-4 w-fit rounded-lg flex items-center justify-center">
            <GiTakeMyMoney className="text-green-400" />
          </h1>
          <h2 className="text-xl mb-2 font-bold">Account & Finance</h2>
          <p className="text-gray-400">300 Jobs Available</p>
        </div>

        <div className="text-start border border-gray-700 p-5 bg-base-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-4xl mb-4 bg-base-300 p-4 w-fit rounded-lg flex items-center justify-center">
            <HiOutlineLightBulb className="text-yellow-300" />
          </h1>
          <h2 className="text-xl mb-2 font-bold">Creative Design</h2>
          <p className="text-gray-400">100+ Jobs Available</p>
        </div>

        <div className="text-start border border-gray-700 p-5 bg-base-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-4xl mb-4 bg-base-300 p-4 w-fit rounded-lg flex items-center justify-center">
            <FcSalesPerformance />
          </h1>
          <h2 className="text-xl mb-2 font-bold">Marketing & Sales</h2>
          <p className="text-gray-400">150 Jobs Available</p>
        </div>

        <div className="text-start border border-gray-700 p-5 bg-base-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-4xl mb-4 bg-base-300 p-4 w-fit rounded-lg flex items-center justify-center">
            <MdOutlineEngineering className="text-blue-400" />
          </h1>
          <h2 className="text-xl mb-2 font-bold">Engineering Job</h2>
          <p className="text-gray-400">224 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
