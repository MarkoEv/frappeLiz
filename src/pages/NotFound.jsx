import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiFrown } from "react-icons/fi";

export function NotFound() {
  return (
    <section className="flex  flex-col items-center justify-center px-4 py-16 text-center">
      {/* Evita que Google indexe esta página como contenido real */}
      <Helmet>
        <title>Página no encontrada | FrappéLiz</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <h1 className=" font-serif text-2xl font-bold tracking-tight text-[#7c4a31]">
        Página no encontrada
      </h1>

      <span className=" flex h-24 w-24 items-center justify-center rounded-full bg-rose-50 text-[#7c4a31]">
        <FiFrown size={44} />
      </span>

      <Link
        to="/"
        className="text-sm font-semibold text-[#7c4a31] underline underline-offset-4 transition hover:text-[#5b3c2d]"
      >
        Ver el menú | Carta
      </Link>
    </section>
  );
}

export default NotFound;
