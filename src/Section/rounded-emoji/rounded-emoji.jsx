// for import icons
import ForHappy from "./asset/Happy.svg";
import Eyes from "./asset/Eyes.svg";
import Globe from "./asset/globe.svg";

import "./style/roundedstyle.css";

function EmojiLayout() {
  return (
    <>
      <div className="xl:flex grid gap-16 items-center xl:gap-40 mt-36 justify-center">
        <div>
          {/* for rounded smile Icons */}
          <div className="flex justify-center">
            <img className="p-4 smile-icons rounded-full" src={ForHappy} alt="" />
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-800 font-semibold">Team Members</p>
            <h3 className="text-3xl mt-2 text-gray-600 font-medium">500</h3>
          </div>
        </div>
        <div>
          {/* for rounded eyes Icons */}
          <div className="flex justify-center">
            <img className="p-4 eyes-icons rounded-full" src={Eyes} alt="" />
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-800 font-semibold">Project Published</p>
            <h3 className="text-3xl mt-2 text-gray-600 font-medium">2400</h3>
          </div>
        </div>
        <div>
          {/* for rounded globe Icons */}
          <div className="flex justify-center">
            <img className="p-4 globe-icons rounded-full" src={Globe} alt="" />
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-800 font-semibold">Countries</p>
            <h3 className="text-3xl mt-2 text-gray-600 font-medium">80</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmojiLayout;
