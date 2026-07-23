import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiCoffee, FiHome } from "react-icons/fi";

const WA_NUMBER = "527451119782";
const waLink = (msg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      {/* Evita que Google indexe esta página como contenido real */}
      <Helmet>
        <title>Página no encontrada | FrappéLiz</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <span className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 text-[#7c4a31]">
        <FiCoffee size={36} />
      </span>

      <h1 className="mb-2 font-serif text-4xl font-bold tracking-tight text-[#7c4a31]">
        404
      </h1>
      <p className="mb-1 text-lg font-semibold text-[#3a2a20]">
        Esta página se nos derramó
      </p>
      <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-[#9a6a50]">
        No encontramos lo que buscabas. Quizás el link está mal escrito o la
        página ya no existe, pero aquí tienes a dónde ir:
      </p>

      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#7c4a31] px-5 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#5b3c2d] active:scale-95"
        >
          <FiHome size={16} />
          Ir al inicio
        </Link>
        <Link
          to="/carta"
          className="inline-flex items-center gap-2 rounded-2xl border border-rose-100 bg-white px-5 py-3 text-sm font-semibold text-[#5b3c2d] transition hover:bg-rose-50 active:scale-95"
        >
          Ver la carta
        </Link>
        <Link
          to="/desayunos"
          className="inline-flex items-center gap-2 rounded-2xl border border-rose-100 bg-white px-5 py-3 text-sm font-semibold text-[#5b3c2d] transition hover:bg-rose-50 active:scale-95"
        >
          Desayunos
        </Link>
      </div>

      <a
        href={waLink("Hola! Entré a un link que no funcionaba en su web 👋")}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366] transition hover:underline"
      >
        <FaWhatsapp size={16} />
        Prefiero escribirles directo por WhatsApp
      </a>
    </section>
  );
}

export default NotFound;
