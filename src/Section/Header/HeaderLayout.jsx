import PagesDrop from "./Hooks/PagesDropDown";
import ComponentsDrop from "./Hooks/ComponentDropDown";
import SupportDrop from "./Hooks/SupportDropDown";

// import css
import './style/HeaderLayout.css'

function HeaderLayout() {
  return (
    <>
      <nav className="flex items-center">
        <div className="flex items-center">
          <PagesDrop />
          <ComponentsDrop />
          <SupportDrop />
        </div>
        <div className="flex items-center">
          <button className="to-payment-button">
            
          </button>
          <button></button>
        </div>
      </nav>
    </>
  );
}

export default HeaderLayout;
