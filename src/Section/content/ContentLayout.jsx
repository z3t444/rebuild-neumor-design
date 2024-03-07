import "./style/ContentStyle.css";

function ContentLayout() {
  return (
    <>
      <div className="lg:grid xl:flex lg:px-20 justify-center gap-40 mt-40 be-vietnam items-center">
        <div className="md:flex flex justify-center md:justify-center">
          {/* left content */}
          <div className="box hidden md:block lg:block xl:block">
            <div className="spin-container">
              {/* rotate shape */}
              <div className="shape">
                <div className="bd"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center lg:text-center mt-10 md:pt-5 px-10 xl:text-start">
          {/* right content */}
          <h3 className="text-4xl leading-tight font-medium">
            Design with us, Develop <br />
            Anything.
          </h3>
          {/* for desk */}
          <div className="md:px-20">
            <p className="xl:w-[400px] mt-5 leading-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi, neque in quis alias ut dolore voluptatum. Reprehenderit vero dignissimos facere quam possimus eum animi, debitis commodi, voluptatibus porro aperiam!</p>
            <p className="mt-5 xl:w-[400px] leading-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, asperiores sapiente cum quibusdam est explicabo?</p>
          </div>
          <div className="for-hand-models"></div>
        </div>
      </div>
    </>
  );
}

export default ContentLayout;
