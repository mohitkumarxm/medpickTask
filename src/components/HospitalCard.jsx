import React from "react";
const ProgressDots = ({ total = 10, filled = 7 }) => {
  return (
    <div className="flex justify-center gap-1 mt-1">
      {[...Array(total)].map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < filled ? "bg-purple-600" : "bg-white"
          }`}
        />
      ))}
    </div>
  );
};
const HospitalCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center mb-6 gap-2">
      <div className="flex items-start space-x-4 flex-1">
        <div className="bg-blue-100 p-3 rounded-full text-blue-600 text-2xl">
          🏥
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold">City General Hospital</h2>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
              Active Client
            </span>
          </div>
          <div className="text-sm text-gray-500 mt-1 flex items-center space-x-2">
            <span className="text-green-500">● Online</span>
            <span>• Last updated 2 mins ago</span>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Annual Contract Value
          </div>
          <div className="text-2xl font-bold">₹2,50,00,000</div>
        </div>
      </div>

      <div className="flex space-x-6 flex-1 justify-between">
        <div className="flex flex-col gap-6">
          <div className="text-center bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl h-30  w-44 grid gap-2">
            <div className="text-sm text-blue-700">Performance</div>
            <div className="text-xl font-semibold text-blue-600">98.5%</div>
            <div className="h-1 bg-blue-200 rounded-full mt-1 w-20 mx-auto">
              <div className="h-2 bg-blue-600 rounded-full w-[98%]" />
            </div>
          </div>
          <div>
            <div className="text-[#6B7280]">Assets</div>
            <div className="font-semibold">487</div>
          </div>
        </div>
        <div className="flex flex-col gap-6 ">
          <div className="text-center  bg-gradient-to-br from-green-100 to-green-200 p-2 rounded-2xl h-30 w-44 grid gap-2 ">
            <div className="text-sm text-blue-700">Satisfaction</div>
            <div className="text-xl font-semibold text-green-600">4.8/5</div>
            <div className="flex justify-center mt-1 space-x-1">
              <div className="flex justify-center mt-1 space-x-0">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="text-white text-sm p-1 bg-green-500 rounded-full -ml-2 w-8 border-2 border-white"
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="text-[#6B7280]">Services</div>
            <div className="font-semibold">24</div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-center  bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-2xl h-30 w-44 grid gap-2">
            <div className="text-sm text-blue-700">Asset Utilization</div>
            <div className="text-xl font-semibold text-purple-600">95.3%</div>
            <div className="flex justify-center gap-1 mt-1">
              <ProgressDots total={10} filled={9} />
            </div>
          </div>
          <div>
            <div className="text-[#6B7280]">Uptime</div>
            <div className="font-semibold">99.9%</div>
          </div>
        </div>

        <div></div>
      </div>

      <div className="flex flex-col items-center flex-1">
        <button className="bg-blue-700 text-white px-4 py-2 rounded-xl mb-2 text-sm hover:bg-blue-800">
          + Generate Report
        </button>
        <div className="w-40 h-36 bg-gradient-to-br from-gray-300 to-blue-600 text-white rounded-xl flex items-center justify-center text-center text-lg">
          XXXXXXXXXX
          <br />
          XXXXXXXXXX
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
