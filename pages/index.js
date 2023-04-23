import { Footer, Navbar, BottomNavigator } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden py-4">
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
      <div className="gradient-04 z-0" />
    </div>

    <div className="relative">
      <Insights />
      <BottomNavigator />
      <div className="gradient-04 z-0" />
      <Feedback />
      <BottomNavigator />
    </div>
    <Footer />
  </div>
);

export default Page;
