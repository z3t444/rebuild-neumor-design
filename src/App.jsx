// import section layout
import HeaderSection from "./Section/Header/HeaderLayout";
import HeroSection from "./Section/Hero/HeroLayout";
import BannerSection from "./Section/Banner/bannerSection";
import ContentSection from "./Section/content/ContentLayout";
import RoundedEmoji from "./Section/rounded-emoji/rounded-emoji";
import "./App.css";

function App() {
  return (
    <>
      {/* layout section */}
      <HeaderSection />
      <HeroSection />
      <BannerSection />
      <ContentSection />
      <RoundedEmoji />
    </>
  );
}

export default App;
