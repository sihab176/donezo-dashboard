import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart2,
  Users,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true },
    { icon: <CheckSquare size={20} />, label: "Tasks", badge: "12+" },
    { icon: <Calendar size={20} />, label: "Calendar" },
    { icon: <BarChart2 size={20} />, label: "Analytics" },
    { icon: <Users size={20} />, label: "Team" },
  ];

  return (
    <aside className="w-64 lg:block hidden bg-gray-100  p-6 flex flex-col justify-between ">
      <div>
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-[#1E5128] rounded-full flex items-center justify-center text-white font-bold">
            D
          </div>
          <span className="text-xl font-bold">Donezo</span>
        </div>

        <nav className="space-y-2">
          <p className="text-xs text-gray-400 uppercase mb-4">Menu</p>
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center justify-between p-3 rounded-xl cursor-pointer ${item.active ? "bg-[#1E5128] text-white" : "text-gray-500 hover:bg-gray-50"}`}
            >
              <div className="flex items-center gap-3">
                {item.icon} <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-[#1E5128] text-white text-[10px] px-1.5 py-0.5 rounded-md">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="space-y-4">
        <p className="text-xs text-gray-400 uppercase">General</p>
        <div className="flex items-center gap-3 text-gray-500 p-2 cursor-pointer">
          <Settings size={20} /> Settings
        </div>
        <div className="flex items-center gap-3 text-gray-500 p-2 cursor-pointer">
          <HelpCircle size={20} /> Help
        </div>
        <div className="flex items-center gap-3 text-gray-500 p-2 cursor-pointer">
          <LogOut size={20} /> Logout
        </div>

        {/* Ad Box */}
        <div className="bg-[#0A1F11] rounded-2xl p-6 text-white mt-2">
          <p className="text-sm mb-4">Download our Mobile App</p>
          <button className="bg-[#1E5128] w-full py-2 rounded-lg text-xs">
            Download
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
