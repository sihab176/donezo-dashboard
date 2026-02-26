import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      <Sidebar />
      
      <main className="flex-1 p-2">
        <Topbar />
        
        <div className="bg-gray-100 p-4  rounded-2xl ">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
