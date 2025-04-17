import { Chart } from "react-google-charts";
import {
  FiCheckCircle,
  FiXCircle,
  FiMinusCircle,
  FiCalendar,
} from "react-icons/fi";

const WarrantyStatusCard = () => {
  const data = [
    ["Status", "Percentage"],
    ["Total", 50],
    ["Expires Soon", 30],
    ["Requested", 20],
  ];

  const options = {
    pieHole: 0.6,
    legend: "none",
    pieSliceText: "none",
    colors: ["#34D399", "#FBBF24", "#A78BFA"],
    chartArea: { width: "100%", height: "100%" },
    backgroundColor: "transparent",
  };

  const statusCards = [
    {
      label: "Total",
      percent: "50%",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      icon: <FiCheckCircle className="text-emerald-600 text-2xl" />,
    },
    {
      label: "Expires Soon",
      percent: "30%",
      color: "text-amber-600",
      bg: "bg-amber-50",
      icon: <FiXCircle className="text-amber-600 text-2xl" />,
    },
    {
      label: "Requested",
      percent: "20%",
      color: "text-purple-600",
      bg: "bg-purple-50",
      icon: <FiMinusCircle className="text-purple-600 text-2xl" />,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-6/12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Warranty Status</h2>
        <button className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-md text-sm text-gray-700">
          <FiCalendar className="text-lg" /> Mar 2025
        </button>
      </div>

      {/* Donut Chart */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-56 h-56">
          <Chart
            chartType="PieChart"
            width="100%"
            height="100%"
            data={data}
            options={options}
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 h-[168px]">
        {statusCards.map((status, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-between text-center rounded-xl p-8 shadow ${status.bg}`}
          >
            {status.icon}
            <p className={`mt-2 text-xl font-bold ${status.color}`}>
              {status.percent}
            </p>
            <p className={`text-sm mt-1 text-gray-700 ${status.color}`}>
              {" "}
              {status.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarrantyStatusCard;
