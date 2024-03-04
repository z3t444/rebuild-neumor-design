import  { useState } from "react";
import DropArrow from '../asset/DropArrow.svg'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="inline-flex items-center gap-1 justify-center px-4 py-2 text-sm font-semibold text-gray-800 rounded-md focus:outline-none " aria-expanded={isOpen ? "true" : "false"}>
        Component
        <img src={DropArrow} alt="" width={20} />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-3 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Option 2
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
