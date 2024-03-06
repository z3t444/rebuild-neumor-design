import "./style/bannerSection.css";
import AssetImg from "./asset/asset.jpg";

function bannerSection() {
  return (
    <>
      <div className="ClassName max-w-[1200px] mx-auto">
        <div className="banner-container be-vietnam rounded-lg p-20 mx-auto grid md:grid lg:flex xl:flex items-center gap-24 justify-center mt-28">
          <div className="audience-display hover:scale-105 duration-300 text-center">
            <div className="flex justify-center">
              <img src={AssetImg} width={85} className="rounded-full p-2 rounded-asset" alt="" />
            </div>
            <h3 className="text-xl mt-7 text-gray-500 tracking-tight font-semibold">Audience</h3>
            <p className="w-[300px] text-gray-400 leading-6 mt-3 text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt eaque sequi voluptates porro dicta.</p>
          </div>
          <div className="audience-display hover:scale-105 duration-300 text-center">
            <div className="flex justify-center">
              <img src={AssetImg} width={85} className="rounded-full p-2 rounded-asset" alt="" />
            </div>
            <h3 className="text-xl mt-7 text-gray-500 tracking-tight font-semibold">Branding</h3>
            <p className="w-[300px] text-gray-400 leading-6 mt-3 text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt eaque sequi voluptates porro dicta.</p>
          </div>
          <div className="audience-display hover:scale-105 duration-300 text-center">
            <div className="flex justify-center">
              <img src={AssetImg} width={85} className="rounded-full p-2 rounded-asset" alt="" />
            </div>
            <h3 className="text-xl mt-7 text-gray-500 tracking-tight font-semibold">Production</h3>
            <p className="w-[300px] text-gray-400  leading-6 mt-3 text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt eaque sequi voluptates porro dicta.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default bannerSection;
