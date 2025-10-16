import Header2 from "./components/header2";
import Aboutus from "./homepage/aboutus/aboutus";
import Footer from "./components/footer"; 
import Event from "./homepage/event/event";
import Placement from "./homepage/palcement/placement";
import News from "./homepage/news/news";
import Achieve from "./homepage/achievements/achieve";
import Director from "./homepage/directormessage/director";
import Gallery from "./homepage/gallery/gallery";
import Hero from "./homepage/hero/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header and Hero section */}
      <div className="h-screen flex flex-col">
        <Header2 />
        <div className="flex-1">
          <Hero />
        </div>
      </div>

      {/* Main content sections */}
      <main>
        {/* About Us section */}
        <Aboutus />
        
        {/* Placement and Event sections */}
        <Placement />
        <Event />
        
        {/* News section */}
        <News />
        
        {/* Achievements section */}
        <Achieve />
        
        {/* Director's message */}
        <Director />
        
        {/* Gallery section */}
        <Gallery />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
