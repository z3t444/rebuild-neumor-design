import "./style/HeroLayout.css";

function HeroLayout() {
  return (
    <>
      <div className="flex mt-32 justify-center px-3 text-center">
        <div className="ClassName">
          <h3 className=" font-light be-vietnam text-6xl tracking-tight"> We are Themesberg</h3>
          <p className="mt-6 text-gray-500 be-vietnam text-[14px] px-3 leading-7 w-[400px] md:w-[450px] lg:leading-7 xl:leading-7 lg:w-[500px] xl:w-[500px] mx-auto font-normal">
            Themeberg is an independent branding & experience design comppany working at 
            the intersection of culture, design, and technology
          </p>
          <div className="flex mt-20 be-vietnam justify-center">
            <a className="px-6 py-3 text-sm button-on-hero hover:scale-95 duration-300 rounded-lg font-medium" href="#">
              Our works
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroLayout;
