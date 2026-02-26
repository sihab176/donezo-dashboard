import { Video } from "lucide-react";
import React from "react";

const Reminder = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Reminder</h2>
      <h3 className="text-2xl ">Meeting with Arc Company</h3>
      <p className="text-sm text-gray-500 mt-2">Time: 02.00 pm - 03.00 pm</p>
      <button className="mt-6 flex items-center gap-2 justify-center w-full bg-green-800 hover:opacity-90 cursor-pointer text-white text-lg px-4 py-2 rounded-full">
       <span><Video/></span> Start Meeting
      </button>
    </div>
  );
};

export default Reminder;
