import "./styles/App.css";
import { Nav } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { Footer } from "./components/Footer.jsx";
import { Carta } from "./components/Carta.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,228,236,0.95),rgba(255,248,247,0.9),rgba(255,255,255,1))] text-[#3a2a20]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8">
          <Nav />
        </header>
        <main className="space-y-8">
          <Hero />
          <Carta />
        </main>
        <footer className="mt-8 hidden">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
