import PagesDrop from "./Hooks/PagesDropDown";
import ComponentsDrop from "./Hooks/ComponentDropDown";
import SupportDrop from "./Hooks/SupportDropDown";

// import Icons
import PaperPlane from "./asset/PaperPlane.svg";
import DocumentIcons from "./asset/Document.svg";

// import css
import "./style/HeaderLayout.css";

function HeaderLayout() {
  return (
    <>
      <nav className="flex items-center">
        {/* for DropDown Menu */}
        <div className="flex items-center gap-5">
          <PagesDrop />
          <ComponentsDrop />
          <SupportDrop />
        </div>
        {/* for button header */}
        <div className="flex items-center gap-5">
          <a href="/">
            <button className="to-payment-button hover:scale-95 duration-300 p-3 flex items-center gap-2 rounded-lg">
              <img src={PaperPlane} alt="paper plane" width={20} />
              <h3 className="text-[#16d6fa] text-sm font-semibold">Upgrade to PRO</h3>
            </button>
          </a>
          <a href="/">
            <button className="for-document flex hover:scale-95 duration-300 items-center gap-2 p-3 rounded-lg">
              <img src={DocumentIcons} alt="" width={25} />
              <h3 className="text-sm font-semibold">Docs v1.0</h3>
            </button>
          </a>
        </div>
      </nav>
    </>
  );
}

export default HeaderLayout;
