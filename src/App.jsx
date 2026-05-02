import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col relative">
          <div
            className="fixed inset-0 z-0 bg-mesh"
          />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-dots">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}