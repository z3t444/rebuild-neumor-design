import "./style/ContentStyle.css";

function ContentLayout() {
  return (
    <>
      <div className="flex justify-center gap-40 mt-40 be-vietnam items-center">
        <div>
          {/* left content */}
          <div className="box">
            <div className="spin-container">
              {/* rotate shape */}
              <div className="shape">
                <div className="bd"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* right content */}
          <h3 className="text-4xl leading-tight font-medium">
            Design with us, Develop <br />
            Anything.
          </h3>
          {/* for desk */}
          <p className="xl:w-[400px] mt-5 leading-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi, neque in quis alias ut dolore voluptatum. Reprehenderit vero dignissimos facere quam possimus eum animi, debitis commodi, voluptatibus porro aperiam!</p>
          <p className="mt-5 xl:w-[400px] leading-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, asperiores sapiente cum quibusdam est explicabo?</p>
          <div className="for-hand-models"></div>
        </div>
      </div>
    </>
  );
}

export default ContentLayout;
