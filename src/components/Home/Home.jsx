import HomeAboutUs from "./HomeAboutUs";
import HomeContact from "./HomeContact";
import HomeHeader from "./HomeHeader";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumn from "./HomeThreeColumn";
import HomeWhoWeHelp from "./HomeWhoWeHelp";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumn />
      <HomeSimpleSteps />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <HomeContact />
    </>
  );
}
