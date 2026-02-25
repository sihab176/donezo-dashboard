import { createBrowserRouter } from "react-router";
import RootLayout from "../components/layout/RootLayout";
import Homepage from "../pages/Homepage";
import DashboardLayout from "../pages/DashboardLayout/DashboardLayout";
import Dashboard from "../pages/DashboardLayout/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
    ],
    },
    {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: Dashboard,
            }
        ]
    }
]);
