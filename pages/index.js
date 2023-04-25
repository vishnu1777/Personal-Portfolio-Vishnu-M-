import {
  BottomNavigator,
  Footer,
  Navbar,
  About,
  Hero,
  GetStarted,
  Explore,
  Insights,
  Feedback,
} from "../components";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />

    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
      <BottomNavigator />
    </div>
    <div className="relative">
      <GetStarted />
      <BottomNavigator />
    </div>
    <div className="relative">
      <Insights />

      <div className="gradient-04 z-0" />
      <Feedback />
      <BottomNavigator />
    </div>
    <Footer />
  </div>
);

export default Page;
