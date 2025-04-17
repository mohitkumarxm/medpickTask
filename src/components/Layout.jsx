import React from "react";
import cImage from "../assets/c.png";

import Sidebar from "./Sidebar";
import QuickStats from "./QuickStats";
import TrackingCards from "./TrackingCards";
import ServicesChart from "./ServicesChart";
import CalibrationStatusCard from "./CalibrationStatusCard";
import WarrantyStatusCard from "./WarrantyStatusCard";
import IncidentsChart from "./IncidentsChart";
import NeedAttentionCard from "./NeedAttentionCard";
import HospitalCard from "./HospitalCard";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1B2535] text-white p-6 space-y-6">
        <div className="flex justify-center">
          <img src={cImage} className="w-28 h-16" />
        </div>
        <Sidebar />
      </aside>

      <main className="flex-1 overflow-auto">
        <Header />

        <div className="p-6">
          <HospitalCard />

          <QuickStats />
          <TrackingCards />
          <div className="flex gap-6 mt-6 mb-6">
            <ServicesChart />
            <CalibrationStatusCard />
          </div>
          <div className="flex gap-6 mt-6 mb-6">
            <IncidentsChart />
            <WarrantyStatusCard />
          </div>
          <NeedAttentionCard />
        </div>
      </main>
    </div>
  );
};

export default Layout;
