import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav.jsx";
import { Footer } from "./components/Footer.jsx";
import { Desayunos } from "./pages/Desayunos.jsx";
import { Contacto } from "./pages/Contacto.jsx";
import { Carta } from "./pages/Carta.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,228,236,0.95),rgba(255,248,247,0.9),rgba(255,255,255,1))] text-[#3a2a20]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <header className="mb-8">
            <Nav />
          </header>
          <main className="space-y-8">
            <Routes>
              <Route path="/" element={<Carta />} />
              <Route path="/desayunos" element={<Desayunos />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
