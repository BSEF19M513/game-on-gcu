import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FeaturesSection from "./features/page";
import HeroSection from "./herosection/page";
import NewsUpdatesSection from "./updates/page";

export default function Home() {
  return (
    <main
    className="flex flex-col h-full w-full"
    >
      <Navbar />
      <HeroSection />
      <NewsUpdatesSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
