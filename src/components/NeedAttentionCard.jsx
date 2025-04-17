import React from "react";
import { FiPlus } from "react-icons/fi"; // Changed to react-icons

const NeedAttentionCard = () => {
  const cardData = [
    {
      assetCode: "MED-1234",
      department: "Cardiology",
      service: "Maintenance",
      status: "Urgent",
    },
    {
      assetCode: "MED-2356",
      department: "Radiology",
      service: "Repair",
      status: "High",
    },
    {
      assetCode: "MED-7890",
      department: "Laboratory",
      service: "Calibration",
      status: "Medium",
    },
    {
      assetCode: "MED-4567",
      department: "Emergency",
      service: "Replacement",
      status: "Low",
    },
  ];

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case "Urgent":
        return "bg-red-100 text-red-600";
      case "High":
        return "bg-red-100 text-red-600";
      case "Medium":
        return "bg-yellow-100 text-yellow-900";
      case "Low":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-200 text-gray-500";
    }
  };

  const getStatusBadgeText = (status) => {
    switch (status) {
      case "Urgent":
        return "Urgent";
      case "High":
        return "High";
      case "Medium":
        return "Medium";
      case "Low":
        return "Low";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Need Attention</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center text-sm">
          <FiPlus className="mr-2 h-4 w-4" /> Add New
        </button>
      </div>
      <div className="rounded-md ">
        <table className="min-w-full ">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Asset Code
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Department
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Service
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            {cardData.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.assetCode}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.service}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeStyle(
                      item.status
                    )}`}
                  >
                    {getStatusBadgeText(item.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NeedAttentionCard;
