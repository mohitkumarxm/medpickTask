import { FaBell, FaThLarge, FaTools, FaCogs } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const Header = () => {
  return (
    <div className="w-full bg-white flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex space-x-4 items-center">
        <button className="bg-white rounded-full font-medium flex gap-2 shadow-sm">
          <div className="rounded-full text-white bg-blue-950 w-10 p-2">B</div>
          <div className="p-2 pr-4"> Non Bio Medical</div>
        </button>
        <button className="bg-white px-4 py-2 rounded-full font-medium flex items-center shadow-sm">
          Vijayanagar ▼
        </button>
        <FaThLarge className="text-xl text-gray-600" />
        <FaBell className="text-xl text-gray-600" />
        <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold">
          A
        </div>
      </div>
    </div>
  );
};

export default Header;
