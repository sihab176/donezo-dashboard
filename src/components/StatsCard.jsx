import { ArrowUpRight } from "lucide-react";
import React from "react";

const StatsCard = ({ title, count, textColor, trend }) => {
  return (
    <section
      className={`group hover:scale-105 transition-transform duration-400 hover:bg-green-900 bg-white  px-6 py-6 rounded-3xl shadow-sm border border-gray-100`}
    >
      <div className="flex justify-between items-start">
        <span className={`text-sm group-hover:text-white ${textColor}`}>
          {title}
        </span>
        <div
          className={`p-1 rounded-full border  ${textColor === "text-white" ? "border-white" : "border-gray-200"}`}
        >
          <ArrowUpRight
            size={16}
            className={`${textColor} group-hover:text-white`}
          />
        </div>
      </div>
      <div>
        <h2
          className={`${textColor} text-4xl font-bold group-hover:text-white`}
        >
          {count}
        </h2>
        <p
          className={`${textColor} text-[10px] mt-1 opacity-70 group-hover:text-white`}
        >
          {trend}
        </p>
      </div>
    </section>
  );
};

export default StatsCard;
