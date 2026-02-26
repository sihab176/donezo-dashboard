import ProjectAnalysis from "../../components/ProjectAnalysis";
import Reminder from "../../components/Reminder";
import StatsCard from "../../components/StatsCard";

const Dashboard = () => {
  return (
    <div className="">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Projects"
          count="24"
          textColor="text-black"
          trend="+5% Increased"
        />
        <StatsCard
          title="Ended Projects"
          count="10"
          textColor="text-black"
          trend="+6% Increased"
        />
        <StatsCard
          title="Running Projects"
          count="12"
          textColor="text-black"
          trend="+2% Increased"
        />
        <StatsCard
          title="Pending Project"
          count="2"
          textColor="text-black"
          trend="On Discuss"
        />
      </div>
      <main className="py-4 min-h-screen">
        <div className="grid grid-cols-12 gap-2">
          {/* project Analysis */}
          <div className="col-span-6 bg-white p-3 rounded-2xl shadow ">
            <ProjectAnalysis />
          </div>
          {/* reminder */}
          <div className="col-span-3 bg-white p-3 rounded-2xl shadow ">
           <Reminder />
          </div>
          {/* project */}
          <div className="col-span-3 bg-white p-3 rounded-2xl shadow ">
           Project
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
