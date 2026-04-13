import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import Clinic from './components/Clinic';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import About from './components/About';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ServicePage from './pages/ServicePage';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Clinic />
      <Services />
      <BeforeAfter />
      <About />
      <Differentials />
      <Testimonials />
      <Contact />
      <Instagram />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos/:slug" element={<ServicePage />} />
      </Routes>
    </>
  );
}
