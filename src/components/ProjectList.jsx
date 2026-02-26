import React, { useState, useEffect } from "react";
import { Pause, Square } from "lucide-react";
export const ProjectList = () => {
  const projects = [
    {
      name: "Develop API Endpoints",
      date: "Nov 26, 2024",
      image: "/right1.JPG",
    },
    { name: "Onboarding Flow", date: "Nov 28, 2024", image: "/right2.JPG" },
    { name: "Build Dashboard", date: "Nov 30, 2024", image: "/right3.JPG" },
    { name: "Optimize Page Load", date: "Dec 5, 2024", image: "/right4.JPG" },
    {
      name: "Cross-Browser Testing",
      date: "Dec 6, 2024",
      image: "/right5.JPG",
    },
  ];

  const [seconds, setSeconds] = useState(5048); // Initial time: 01:24:08
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  // Seconds ke HH:MM:SS format e convert korar function
  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div className="p-4 bg-white  rounded-2xl shadow mb-2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Project</h3>
          <button className="border border-[#1E5128] text-[#1E5128] px-4 py-1 rounded-full text-xs font-medium">
            + New
          </button>
        </div>
        <div className="space-y-4">
          {projects.map((p, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-2xl">
                <img src={p.image} alt="" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800">{p.name}</h4>
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">
                  Due date: {p.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* time tracker */}
      <div className="bg-[url('/time.png')] bg-cover bg-center h-48 rounded-2xl p-4">
        <h2 className="text-xl font-semibold text-white">Time Tracker</h2>
        <div className="relative overflow-hidden ">
          {/* Background abstract texture (Image-er moto wavy look dite) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(30,81,40,1)_0%,rgba(10,31,17,1)_70%)] animate-pulse"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Time Display */}
            <h2 className="text-4xl font-semibold tracking-widest mt-4 mb-6 text-white">
              {formatTime(seconds)}
            </h2>

            {/* Controls */}
            <div className="flex gap-4">
              {/* Pause Button */}
              <button
                onClick={() => setIsActive(!isActive)}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1E5128] hover:bg-gray-200 transition-colors shadow-xl"
              >
                {isActive ? (
                  <Pause fill="currentColor" size={24} />
                ) : (
                  <div className="ml-1 w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-[#1E5128] border-b-[10px] border-b-transparent"></div>
                )}
              </button>

              {/* Stop Button */}
              <button
                onClick={() => {
                  setIsActive(false);
                  setSeconds(0);
                }}
                className="w-14 h-14 bg-[#E23E3E] rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors shadow-xl"
              >
                <Square fill="currentColor" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
