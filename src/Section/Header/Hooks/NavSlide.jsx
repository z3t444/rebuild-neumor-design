import  { useState } from "react";

const SlideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {isOpen && <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" aria-hidden="true"></div>}

      <div className={`fixed inset-y-0 left-0 w-64 bg-white transition duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="font-bold text-lg">Navbar</span>
          <button onClick={toggleNavbar} className="text-gray-800 focus:outline-none focus:text-gray-600">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-4">
          <a href="#" className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100">
            Home
          </a>
          <a href="#" className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100">
            About
          </a>
          <a href="#" className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100">
            Services
          </a>
          <a href="#" className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SlideNavbar;
