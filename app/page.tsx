import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SpaceCards from "./components/SpaceCards";
import About from "./components/About";
import Cowork from "./components/Cowork";
import Eventos from "./components/Eventos";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Spaces from "./components/Spaces";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <AnnouncementBar />
      <Navbar />

      <main>
        <div className="max-w-[1300px] mx-auto">
          <Hero />
        </div>

        <SpaceCards />
        <About />
        <Cowork />
        <Eventos />
        {/* <Stats /> */}
        {/* <Features /> */}
        {/* <Spaces /> */}
        {/* <Testimonials /> */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
