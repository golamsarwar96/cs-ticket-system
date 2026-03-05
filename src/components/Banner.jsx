import React from "react";
import vector1 from "../assets/vector1.png";
const Banner = ({ count, resolveCount }) => {
  return (
    <div>
      <div className="p-4 flex justify-center items-center flex-col md:flex-row gap-4">
        {/* in progress card */}
        <div className="bg-gradient-to-br from-[#6A42D1] via-[#8B5CF6] to-[#B18CFE] flex justify-between rounded-sm">
          <div>
            <img src={vector1} alt="" />
          </div>
          <div className="text-center lg:mt-12 mt-4 text-white">
            <p className="lg:text-2xl text-medium font-normal w-30">
              In Progress
            </p>
            <h1 className="lg:text-6xl text-4xl font-medium">{count}</h1>
          </div>
          <div>
            <img src={vector1} className="scale-x-[-1]" alt="" />
          </div>
        </div>
        {/* resolved card */}
        <div className="bg-gradient-to-r from-[#58C26D] to-[#0F766E] flex justify-between rounded-sm">
          <div>
            <img src={vector1} alt="" />
          </div>
          <div className="text-center lg:mt-12 mt-4 text-white">
            <p className="lg:text-2xl text-medium font-normal w-30">Resolved</p>
            <h1 className="lg:text-6xl text-4xl font-medium">{resolveCount}</h1>
          </div>
          <div>
            <img src={vector1} className="scale-x-[-1]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
