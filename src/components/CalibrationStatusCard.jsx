import { Chart } from "react-google-charts";
import {
  FiCheckCircle,
  FiXCircle,
  FiMinusCircle,
  FiCalendar,
} from "react-icons/fi";

const CalibrationStatusCard = () => {
  const data = [
    ["Status", "Percentage"],
    ["Calibrated", 45],
    ["Not Calibrated", 35],
    ["Not Required", 20],
  ];

  const options = {
    pieHole: 0.6,
    legend: "none",
    pieSliceText: "none",
    colors: ["#60A5FA", "#FCA5A5", "#9CA3AF"],
    chartArea: { width: "100%", height: "100%" },
    backgroundColor: "transparent",
  };

  const statusCards = [
    {
      label: "Calibrated",
      percent: "45%",
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: <FiCheckCircle className="text-blue-600 text-2xl" />,
    },
    {
      label: "Not Calibrated",
      percent: "35%",
      color: "text-red-600",
      bg: "bg-red-50",
      icon: <FiXCircle className="text-red-600 text-2xl" />,
    },
    {
      label: "Not Required",
      percent: "20%",
      color: "text-gray-700",
      bg: "bg-gray-100",
      icon: <FiMinusCircle className="text-gray-600 text-2xl" />,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-6/12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Calibration Status
        </h2>
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

      {/* Status Cards */}
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
              {status.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalibrationStatusCard;
