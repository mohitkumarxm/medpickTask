import { useState } from "react";
import {
  MdDashboard,
  MdOutlineInventory2,
  MdBuild,
  MdSettings,
  MdMessage,
  MdPeople,
  MdAssessment,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import ContactAndLogoutButtons from "./ContactAndLogoutButtons";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    assets: false,
    users: false,
    reports: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className=" text-white p-4 flex flex-col justify-between h-[90%]">
      <nav className="space-y-6">
        <MenuItem icon={<MdDashboard size={20} />} label="Dashboard" />

        {/* Assets */}
        <DropdownMenu
          icon={<MdOutlineInventory2 size={20} />}
          label="Assets"
          isOpen={openMenus.assets}
          toggle={() => toggleMenu("assets")}
          items={[
            "All Assets",
            "Departments",
            "Movements",
            "Depreciation",
            "Check In",
            "Check Out",
            "Sell Online",
          ]}
        />

        <MenuItem icon={<MdBuild size={20} />} label="Incidents" />
        <MenuItem icon={<MdSettings size={20} />} label="Services" />
        <MenuItem icon={<MdMessage size={20} />} label="Request" />

        {/* Users */}
        <DropdownMenu
          icon={<MdPeople size={20} />}
          label="Users"
          isOpen={openMenus.users}
          toggle={() => toggleMenu("users")}
          items={["All Users", "Roles", "Permissions"]}
        />

        {/* Reports */}
        <DropdownMenu
          icon={<MdAssessment size={20} />}
          label="Reports"
          isOpen={openMenus.reports}
          toggle={() => toggleMenu("reports")}
          items={["Summary", "Asset Reports", "User Reports"]}
        />
      </nav>
      <ContactAndLogoutButtons />
    </div>
  );
};

const MenuItem = ({ icon, label }) => (
  <div className="flex items-center gap-6 cursor-pointer hover:text-blue-400">
    {icon}
    <span className="font-semibold">{label}</span>
  </div>
);

const DropdownMenu = ({ icon, label, isOpen, toggle, items }) => (
  <div>
    <div
      className="flex items-center justify-between gap-6 cursor-pointer hover:text-blue-400"
      onClick={toggle}
    >
      <div className="flex items-center gap-6">
        {icon}
        <span className="font-semibold">{label}</span>
      </div>
      <span className="text-sm">
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </span>
    </div>

    <div
      className={`ml-8 pl-4 overflow-hidden transition-all duration-300 ease-in-out border-l border-gray-500 ${
        isOpen ? "max-h-60 mt-2 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="space-y-2 text-sm">
        {items.map((item, index) => (
          <div key={index} className="cursor-pointer hover:text-blue-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Sidebar;
