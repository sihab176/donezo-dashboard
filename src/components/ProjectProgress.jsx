import React from "react";

export default function ProjectProgress() {
  const percentage = 41;
  const completedGreen = "#1E7344";
  const inProgressGreen = "#0E4B2B";
  const hatchingColor = "#D1D5DB";

  return (
    <div className=" p-1">
      <h3 className="text-xl font-bold text-gray-800 mb-8">Project Progress</h3>

      <div className="relative flex flex-col items-center">
        {/*  Semi-Circle */}
        <div className="relative lg:w-72 lg:h-36 w-52 h-24 overflow-hidden ">
          <div
            className="absolute top-0 left-0 lg:w-72 lg:h-72 w-52 h-52  rounded-full border-[35px] border-transparent"
            style={{
              background: `
                conic-gradient(
                  from 180deg at 50% 50%,
                  ${completedGreen} 0deg,
                  ${completedGreen} ${180 * (percentage / 100)}deg,
                  ${inProgressGreen} ${180 * (percentage / 100)}deg,
                  ${inProgressGreen} 130deg,
                  transparent 130deg
                ) border-box,
                repeating-linear-gradient(
                  -45deg,
                  ${hatchingColor},
                  ${hatchingColor} 2px,
                  #fff 2px,
                  #fff 8px
                ) border-box
              `,
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
              transform: "rotate(90deg)",
            }}
          ></div>
        </div>

        {/* Center Text  */}
        <div className="absolute top-16 flex flex-col items-center">
          <h2 className="lg:text-6xl text-4xl font-bold text-gray-700 leading-none">
            {percentage}
            <span className="text-4xl">%</span>
          </h2>
          <p className="text-green-600 font-medium mt-2">Project Ended</p>
        </div>
      </div>

      {/* Legend Indicators */}
      <div className="lg:flex justify-between items-center lg:mt-7 mt-12 px-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#1E7344]"></div>
          <span className="text-xs text-gray-500 font-medium">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#0E4B2B]"></div>
          <span className="text-xs text-gray-500 font-medium">In Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{
              background: `repeating-linear-gradient(-45deg, ${hatchingColor}, ${hatchingColor} 1px, #fff 1px, #fff 3px)`,
              border: `1px solid ${hatchingColor}`,
            }}
          ></div>
          <span className="text-xs text-gray-500 font-medium">Pending</span>
        </div>
      </div>
    </div>
  );
}
