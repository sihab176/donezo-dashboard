import ProjectAnalysis from "../../components/ProjectAnalysis";
import { ProjectList } from "../../components/ProjectList";
import ProjectProgress from "../../components/ProjectProgress";
import Reminder from "../../components/Reminder";
import StatsCard from "../../components/StatsCard";
import TeamCollaboration from "../../components/TeamCollaboration";

const Dashboard = () => {
  return (
    <div className="bg-[#ffffffc4] ">
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
      <main className="py-4 ">
        <div className="grid grid-cols-12 gap-2">
          {/* project Analysis */}
          <div className="col-span-6 bg-white p-3 h-52 rounded-2xl shadow ">
            <ProjectAnalysis />
          </div>
          {/* reminder */}
          <div className="col-span-3 bg-white p-3 h-52 rounded-2xl shadow ">
           <Reminder />
          </div>
          {/* project */}
          <div className="col-span-3 px-1 row-span-2  ">
           <ProjectList/>
          </div>
          {/* team 1 */}
          <div className="col-span-5 bg-white p-3  rounded-2xl shadow ">
            <TeamCollaboration/>
          </div>
          {/* ProjectProgress*/}
          <div className="col-span-4 bg-white p-3  rounded-2xl shadow ">
            <ProjectProgress/>
          </div>
          {/* Time  */}
          {/* <div className="col-span-3 row-span-1 bg-white p-3 rounded-2xl shadow ">
            Time
          </div> */}
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
