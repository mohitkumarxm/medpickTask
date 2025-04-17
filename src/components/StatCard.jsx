const StatCard = ({ title, value, icon, color }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    red: "bg-red-100 text-red-700",
    orange: "bg-orange-100 text-orange-700",
    green: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow flex items-center space-x-4">
      <div className={`p-3 rounded-full ${colors[color]} text-xl`}>{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </div>
  );
};

export default StatCard;
