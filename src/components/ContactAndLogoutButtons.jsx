import React from "react";
import { FaHeadset } from "react-icons/fa"; // Font Awesome headset icon
import { FiLogOut } from "react-icons/fi"; // Feather logout icon

const ContactAndLogoutButtons = () => {
  return (
    <div className="flex flex-col space-y-4">
      <button
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent text-white
                    transition-colors duration-300 border border-white"
      >
        <FaHeadset className="w-5 h-5" />
        <span className="font-medium">Contact Us</span>
      </button>

      <button
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent text-white
                    transition-colors duration-300 border border-white"
      >
        <FiLogOut className="w-5 h-5" />
        <span className="font-medium">Log Out</span>
      </button>
    </div>
  );
};

export default ContactAndLogoutButtons;
