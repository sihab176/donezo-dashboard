import React from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <h1>header</h1>
          <Outlet />
          content
      <h1>footer</h1>
    </div>
  );
};

export default DashboardLayout;
