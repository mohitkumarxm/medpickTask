import React from "react";
import StatCard from "./StatCard";

const QuickStats = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-6 mb-6">
      <StatCard title="Assets" value="487" icon="📊" color="blue" />
      <StatCard title="Not Working" value="24" icon="❗" color="red" />
      <StatCard title="Discarded" value="18" icon="⚠️" color="orange" />
      <StatCard title="Department" value="12" icon="🧩" color="green" />
    </div>
  );
};

export default QuickStats;
