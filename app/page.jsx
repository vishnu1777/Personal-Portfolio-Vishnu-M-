import "../styles/globals.css";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Certificates from "./Certificates";
import TestimonialServerComp from "./TestimonialServerComp";
import { BottomNavigator, Footer, Navbar, About, Hero } from "../components";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />

    <div className="relative">
      <About />
      <div className="gradient-03 z-0" id="works" />
      <Projects />
      <BottomNavigator />
    </div>
    <div className="relative">
      <TechStack />
      <BottomNavigator />
    </div>
    <div className="relative">
      <Certificates />

      <div className="gradient-04 z-0" />
      <TestimonialServerComp />
      <BottomNavigator />
    </div>
    <Footer />
  </div>
);

export default Page;
