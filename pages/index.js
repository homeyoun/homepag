import ConterLogo from "../components/ConterLogo";
import MainMenu from "../components/MainMenu";
import RollingBanner from "../components/RollingBanner";
import TopSubMenu from "../components/TopSubMenu";

export default function Home() {
  return (
    <div>
      <TopSubMenu />
      <ConterLogo />
      <MainMenu />
      <RollingBanner />
    </div>
  );
}
