import gsap from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import FlavorSection from "./sections/FlavorSection";
import MessageSection from "./sections/MessageSection";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
        </div>
      </div>
    </main>
  );
};
export default App;
