import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-zinc-100" style={{ scrollBehavior: 'smooth' }}>
      {/* Global style for cinematic dark theme + CSS-only scroll animations */}
      <style>{`
        :root { color-scheme: dark; }
        body { background: linear-gradient(180deg, #09090b, #0a0a0b, #0b0b0c); }
        /* Fade and lift when section enters the viewport */
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .reveal { opacity: 0; animation: fade-in-up 900ms both; animation-timing-function: cubic-bezier(.22,.61,.36,1); }
        /* Use view timelines where supported for true on-scroll reveal */
        @supports (animation-timeline: view()) {
          .reveal { animation-timeline: view(); animation-range: entry 10% cover 30%; }
        }
      `}</style>

      <Hero />
      <About />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
