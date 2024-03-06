import { useState } from "react";
import DropArrow from '../asset/DropArrow.svg'
import RouteSupport from "../../../components/Header/routes/RouteSupport";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="inline-flex items-center gap-1 justify-center px-4 py-2 text-sm font-semibold text-gray-800 rounded-md focus:outline-none " aria-expanded={isOpen ? "true" : "false"}>
        Support
        <img src={DropArrow} alt="" width={20} />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-3 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {/* Route DropDown */}
          <RouteSupport/>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
