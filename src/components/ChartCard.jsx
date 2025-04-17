// Dashboard.js
import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Time", "Services"],
  ["00:00", 10],
  ["04:00", 15],
  ["08:00", 25],
  ["12:00", 20],
  ["16:00", 30],
  ["20:00", 18],
];

const options = {
  legend: { position: "none" },
  colors: ["#c2dbff"],
  hAxis: {
    textStyle: { fontSize: 12 },
  },
  vAxis: {
    textStyle: { fontSize: 12 },
  },
  chartArea: { width: "80%", height: "70%" },
  bar: { groupWidth: "60%" },
};

const ChartCard = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen p-6">
      {/* Sidebar */}
      <div className="w-1/4 space-y-6">
        <h2 className="text-lg font-semibold">Services</h2>

        <div className="space-y-4">
          <StatusCard title="Open" value="24" percent="48%" color="green" />
          <StatusCard title="Closed" value="18" percent="36%" color="red" />
          <StatusCard
            title="Expenditure"
            value="₹45K"
            percent="45%"
            color="blue"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-2">
            <button className="px-4 py-1 border rounded-full text-sm">
              Day
            </button>
            <button className="px-4 py-1 border rounded-full text-sm">
              Month
            </button>
            <button className="px-4 py-1 border rounded-full text-sm">
              Year
            </button>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
            Add New
          </button>
        </div>

        {/* Chart */}
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="300px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

const StatusCard = ({ title, value, percent, color }) => {
  const colorClasses = {
    green: "bg-green-100 text-green-600 ring-green-400",
    red: "bg-red-100 text-red-600 ring-red-400",
    blue: "bg-blue-100 text-blue-600 ring-blue-400",
  };

  return (
    <div className={`rounded-xl p-4 shadow-sm ${colorClasses[color]}`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
        <div
          className={`w-12 h-12 rounded-full border-4 border-${color}-400 flex items-center justify-center text-xs font-semibold`}
        >
          {percent}
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
