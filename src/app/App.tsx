import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { TourPackages } from './components/TourPackages';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <Navigation />
      <Hero />
      <Experience />
      <TourPackages />
      <Gallery />
      <Reviews />
      <CTASection />
      <Footer />
    </div>
  );
}