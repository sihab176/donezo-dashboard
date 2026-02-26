export default function TeamCollaboration() {
  const teamMembers = [
    {
      name: "Alexandra Deff",
      avatar: "https://i.pravatar.cc/150?u=alexandra", // Placeholder avatar
      bgColor: "bg-[#FFD8D8]",
      project: "Github Project Repository",
      status: "Completed",
      statusColor: "bg-[#EBF7EE] text-[#117621]",
    },
    {
      name: "Edwin Adenike",
      avatar: "https://i.pravatar.cc/150?u=edwin",
      bgColor: "bg-[#E3FBDC]",
      project: "Integrate User Authentication System",
      status: "In Progress",
      statusColor: "bg-[#FFF9E7] text-[#CC9A06]",
    },
    {
      name: "Isaac Oluwatemilorun",
      avatar: "https://i.pravatar.cc/150?u=isaac",
      bgColor: "bg-[#E0E7FF]",
      project: "Develop Search and Filter Functionality",
      status: "Pending",
      statusColor: "bg-[#FEEFEE] text-[#D8362D]",
    },
    {
      name: "David Oshodi",
      avatar: "https://i.pravatar.cc/150?u=david",
      bgColor: "bg-[#FFF3E1]",
      project: "Responsive Layout for Homepage",
      status: "In Progress",
      statusColor: "bg-[#FFF9E7] text-[#CC9A06]",
    },
  ];

  return (
    <div className="  flex-1">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-800">Team Collaboration</h3>
        <button className="flex items-center gap-2 px-5 py-1.5 cursor-pointer border-2  border-green-600 rounded-full text-xs font-medium text-[#1E5128] hover:border-[#1E5128]/30 hover:bg-[#1E5128]/5 transition-all">
          <span className="text-lg leading-none">+</span> Add Member
        </button>
      </div>

      {/* Team Members List */}
      <div className="space-y-2">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            {/* User Avatar and Info */}
            <div className="flex items-center gap-4 flex-1">
              <div
                className={`w-12 h-12 rounded-full ${member.bgColor} flex items-center justify-center border-2 border-white ring-1 ring-gray-100 overflow-hidden`}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-[10px] text-gray-500">
                  Working on{" "}
                  <span className="text-gray-700 font-medium">
                    {member.project}
                  </span>
                </p>
              </div>
            </div>

            {/* Status Badge */}
            <div
              className={`px-4 py-1.5 rounded-full text-[11px] font-semibold text-center w-28 ${member.statusColor}`}
            >
              {member.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
