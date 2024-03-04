import "./style/HeroLayout.css";

function HeroLayout() {
  return (
    <>
      <div className="flex mt-20 justify-center text-center">
        <div className="ClassName">
          <h3 className=" font-light be-vietnam text-6xl tracking-tight"> We are Themesberg</h3>
          <p className="mt-6 be-vietnam leading-8 font-normal">
            Themeberg is an independent branding & experience design comppany working at <br />
            the intersection of culture, design, and technology
          </p>
          <div className="flex mt-14 be-vietnam justify-center">
            <a className="px-6 py-3 button-on-hero hover:scale-95 duration-300 rounded-lg font-medium" href="#">
              Our works
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroLayout;
