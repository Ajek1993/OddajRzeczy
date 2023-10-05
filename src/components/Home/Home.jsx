import HomeAboutUs from "./HomeAboutUs";
import HomeHeader from "./HomeHeader";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumn from "./HomeThreeColumn";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumn />
      <HomeSimpleSteps />
      <HomeAboutUs />
    </>
  );
}
