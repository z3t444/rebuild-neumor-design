import "../style/Route.css";

function RoutePages() {
  return (
    <>
      <div className="py-1 montserrat route-page-container rounded-lg" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
          Home
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
          About
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
          Contact
        </a>
      </div>
    </>
  );
}

export default RoutePages;
