import '../style/Route.css'

function RouteSupport() {
  return (
    <>
      <div className="py-1 montserrat route-support-container rounded-lg" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
          Zeeta
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
         Dzaky
        </a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
          empty
        </a>
      </div>
    </>
  );
}

export default RouteSupport;
