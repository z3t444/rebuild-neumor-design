// import section layout
import HeaderSection from "./Section/Header/HeaderLayout";
import HeroSection from "./Section/Hero/HeroLayout";
import BannerSection from "./Section/Banner/bannerSection";
import ContentSection from "./Section/content/ContentLayout";
import RoundedEmoji from "./Section/rounded-emoji/rounded-emoji";
import TeamSection from "./Section/Team/TeamLayout";
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
      <TeamSection/>
    </>
  );
}

export default App;
