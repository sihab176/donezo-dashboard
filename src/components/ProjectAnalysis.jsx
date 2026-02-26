const data = [
  { day: "S", value: 80, type: "striped" },
  { day: "M", value: 110, type: "dark" },
  { day: "T", value: 90, type: "light" },
  { day: "W", value: 130, type: "dark" },
  { day: "T", value: 80, type: "striped" },
  { day: "F", value: 65, type: "striped" },
  { day: "S", value: 95, type: "striped" },
];

const ProjectAnalysis = () => {
  return (
    <div className="flex items-end gap-6 h-48 ">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-1">
          <div
            className={`w-10 rounded-full
        ${item.type === "dark" && "bg-teal-800"}
        ${item.type === "light" && "bg-teal-600"}
        ${item.type === "striped" && "bg-striped"}
        `}
            style={{ height: `${item.value}px` }}
          ></div>

          <span className="text-sm text-gray-500">{item.day}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectAnalysis;
