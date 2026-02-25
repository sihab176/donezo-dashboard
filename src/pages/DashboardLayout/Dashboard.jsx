
import Topbar from '../../components/Topbar';
// import StatCard from './components/StatCard';
import Sidebar from '../../components/Sidebar';
// import ProjectAnalytics from './components/ProjectAnalytics';
// import TeamCollaboration from './components/TeamCollaboration';
// import ProjectProgress from './components/ProjectProgress';
// import RightPanel from './components/RightPanel';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA] font-sans">
      <Sidebar />
      
      <main className="flex-1 p-6">
        <Topbar />
        
        <div className="mt-8 flex gap-6">
          {/* Main Content Area */}
          <div className="flex-[2] flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-500 -mt-4">Plan, prioritize, and accomplish your tasks with ease.</p>

            {/* Stats Grid */}
            {/* <div className="grid grid-cols-4 gap-4">
              <StatCard title="Total Projects" count="24" color="bg-[#1E5128]" textColor="text-white" trend="+5% Increased" />
              <StatCard title="Ended Projects" count="10" color="bg-white" textColor="text-black" trend="+6% Increased" />
              <StatCard title="Running Projects" count="12" color="bg-white" textColor="text-black" trend="+2% Increased" />
              <StatCard title="Pending Project" count="2" color="bg-white" textColor="text-black" trend="On Discuss" />
            </div> */}

            {/* <div className="grid grid-cols-2 gap-6">
               <ProjectAnalytics />
               <TeamCollaboration />
            </div>
            
            <ProjectProgress /> */}
          </div>

          {/* Right Sidebar Area */}
          <div className="flex-1">
            {/* <RightPanel /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
export default Dashboard