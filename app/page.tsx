import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import OffGridSpecialists from '../components/OffGridSpecialists';
import SolarWater from '../components/SolarWater';
import HowItWorks from '../components/HowItWorks';
import About from '../components/About';
import Coverage from '../components/Coverage';
import Contact from '../components/Contact';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-textPrimary overflow-hidden">
      <Navigation />
      <Hero />
      <Services />
      <OffGridSpecialists />
      <SolarWater />
      <HowItWorks />
      <About />
      <Coverage />
      <Contact />
      <BlogPreview />
      <Footer />
    </div>
  );
}
