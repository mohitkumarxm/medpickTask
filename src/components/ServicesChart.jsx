import { Chart } from "react-google-charts";
import { FiPlus } from "react-icons/fi";

const data = [
  ["Time", "Services"],
  ["00:00", 400],
  ["04:00", 600],
  ["08:00", 1000],
  ["12:00", 750],
  ["16:00", 1100],
  ["20:00", 650],
];

const options = {
  legend: { position: "none" },
  hAxis: {
    textPosition: "none", // Hides x-axis labels
    baselineColor: "transparent", // Hides x-axis line
    gridlines: {
      color: "transparent", // Hides x-axis grid lines
    },
  },
  vAxis: {
    minValue: 0,
  },
  chartArea: { width: "85%", height: "80%" },
  colors: ["#D0E4FF"],
  bar: { groupWidth: "50%" },
};
const PercentageCard = ({ label, value, percentage, color, bg, textColor }) => (
  <div className={`rounded-xl p-4 shadow-md ${bg} flex flex-col gap-2`}>
    <div className="flex justify-between">
      <div className={`text-sm font-medium  `}>{label}</div>
      <div className={`text-sm font-bold  ${textColor}`}>{value}</div>
    </div>
    <div className="flex items-center justify-center mt-2">
      <div
        className={`w-16 h-16 rounded-full border-4 flex items-center justify-center font-semibold text-black text-sm`}
        style={{
          borderColor: `${color}40`,
          borderRightColor: color,
        }}
      >
        {percentage}%
      </div>
    </div>
  </div>
);

const ServicesChart = () => {
  return (
    <div className=" bg-gray-100 w-6/12">
      <div className="bg-white rounded-xl shadow-lg p-6 flex">
        <div className="w-1/4 flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Services</h2>
          </div>
          <PercentageCard
            label="Open"
            value="24"
            percentage="48"
            color="#22C55E" // green-500
            bg="bg-green-50"
            textColor="text-green-500"
          />
          <PercentageCard
            label="Closed"
            value="18"
            percentage="36"
            color="#EF4444" // red-500
            bg="bg-red-50"
            textColor="text-red-500"
          />
          <PercentageCard
            label="Expenditure"
            value="₹45K"
            percentage="45"
            color="#3B82F6" // blue-500
            bg="bg-blue-50"
            textColor="text-blue-500"
          />
        </div>

        {/* Chart Section */}
        <div className="w-3/4 pl-6 relative">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
              <button className="px-3 py-1 text-sm font-medium bg-white rounded-md shadow">
                Day
              </button>
              <button className="px-3 py-1 text-sm font-medium text-gray-600">
                Month
              </button>
              <button className="px-3 py-1 text-sm font-medium text-gray-600">
                Year
              </button>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-1 text-sm">
              <FiPlus /> Add New
            </button>
          </div>

          <Chart
            chartType="ColumnChart"
            width="100%"
            height="85%"
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesChart;
