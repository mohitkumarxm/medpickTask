import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { FaCube } from "react-icons/fa";

const Card = ({ children }) => (
  <div className="bg-white rounded-xl shadow p-4 w-full flex flex-col justify-between gap-2 relative">
    {children}
    <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
      <FiMoreVertical />
    </button>
  </div>
);

const TrackingCards = () => {
  return (
    <div className="flex gap-4 mt-4 mb-4 bg-gray-100  items-stretch mt-6 mb-6">
      {/* Card 1 - Cumulative Downtime */}
      <Card>
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-4 rounded-full">
            <div className="w-4 h-4 rounded-full bg-red-100 border-2 border-red-500"></div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Cumulative</p>
            <p className="text-sm text-gray-500">Downtime</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          Time wasted due to downtime
        </p>
        <p className="text-2xl font-semibold text-black">17:45:30</p>
      </Card>

      {/* Card 2 - User Asset Tracking */}
      <Card>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 rounded-full p-4">
              <FaCube className="text-blue-500 text-xl" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium text-sm text-black">
                  User Asset Tracking 2.0
                </p>
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">
                  New
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Update tracking for monitoring and maintenance
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-3">
          {[
            "bg-pink-400",
            "bg-purple-400",
            "bg-green-400",
            "bg-yellow-400",
          ].map((color, idx) => (
            <span
              key={idx}
              className={`w-6 h-6 rounded-full ${color} text-white text-xs flex items-center justify-center`}
            >
              {idx + 1}
            </span>
          ))}
          <span className="w-6 h-6 rounded-full bg-gray-200 text-xs flex items-center justify-center text-gray-600">
            +3
          </span>
        </div>
        <div className="w-full flex justify-end">
          <button className="mt-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-sm px-4 py-1.5 rounded flex items-last justify-center gap-1 ">
            Learn More →
          </button>
        </div>
      </Card>

      {/* Card 3 - Placeholder */}
      <Card>
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 rounded-full p-4">
            <FaCube className="text-blue-500 text-xl" />
          </div>
          <p className="text-black text-sm">XXXXXXXXXXXXXX</p>
        </div>
      </Card>
    </div>
  );
};

export default TrackingCards;
