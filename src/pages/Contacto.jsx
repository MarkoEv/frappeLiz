import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiPhone, FiClock, FiExternalLink } from "react-icons/fi";
import { RiFacebookBoxFill } from "react-icons/ri";

import liz from "../../public/images/tienda.jpeg";
import { LazyImage } from "../components/LazyImage.jsx";
import {
  PageSkeletonHeader,
  SkeletonCard,
  SkeletonRow,
} from "../components/Skeleton.jsx";

const PLACE_QUERY = "Frappé+Liz+Cuautepec+Guerrero";

const COMO_LLEGAR = `https://www.google.com/maps/dir/?api=1&destination=${PLACE_QUERY}&destination_place_id=ChIJ`;

const horarios = [
  { dia: "Lunes", hora: "Cerrado", abierto: false },
  { dia: "Martes", hora: "18:00 – 22:30", abierto: true },
  { dia: "Miércoles", hora: "18:00 – 22:30", abierto: true },
  { dia: "Jueves", hora: "18:00 – 22:30", abierto: true },
  { dia: "Viernes", hora: "18:00 – 22:30", abierto: true },
  { dia: "Sábado", hora: "18:00 – 22:30", abierto: true },
  { dia: "Domingo", hora: "18:00 – 22:30", abierto: true },
];
const DIAS_SEMANA = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const hoy = DIAS_SEMANA[new Date().getDay()];

function Contacto() {
  const waLink = "https://wa.me/5217451119782"; // ← pon tu número real
  const [isPageLoading, setIsPageLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = window.setTimeout(() => setIsPageLoading(false), 360);
    return () => window.clearTimeout(timeout);
  }, []);

  if (isPageLoading) {
    return (
      <section className="w-full px-4 sm:px-6 lg:px-8 space-y-8">
        <PageSkeletonHeader />
        <div className="grid gap-4 lg:grid-cols-3">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
        <div className="space-y-4">
          <SkeletonRow />
          <SkeletonRow />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-4  sm:px-6 lg:px-8">
      {/* Encabezado */}
      <div className="mb-8 text-center">
        <p className="mb-1 text-xs uppercase tracking-widest text-[#b07a5a]">
          ¿dónde encontrarnos?
        </p>
        <h1 className="text-3xl font-bold text-[#7c4a31] sm:text-4xl">
          Contáctanos
        </h1>
      </div>
      {/* Grid principal */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* ── WhatsApp + Redes ── */}

        {/* ── WhatsApp + Redes ── */}
        <div className="flex flex-col rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(124,74,49,0.10)] sm:col-span-2 lg:col-span-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#b07a5a]">
            Escríbenos
          </p>
          <p className="mb-5 text-[15px] text-[#5b3c2d]">
            Pedidos, reservaciones y dudas.
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatear por WhatsApp al +52 745 111 9782"
            className="mt-auto flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 text-white transition hover:bg-[#1ebe5d] active:scale-95"
          >
            <FaWhatsapp size={28} aria-hidden="true" />
            <div className="text-left">
              <p className="text-base font-semibold leading-tight">
                Chatear por WhatsApp
              </p>
              <p className="text-xs text-white/80">+52 745 111 9782</p>
            </div>
          </a>

          {/* Redes sociales */}
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.facebook.com/liizbetth.mrtnzferiia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-rose-100 py-2.5 text-sm font-medium text-[#5b3c2d] transition hover:bg-rose-50"
            >
              <RiFacebookBoxFill
                size={18}
                className="text-[#3b5998]"
                aria-hidden="true"
              />
              Facebook
            </a>
          </div>
        </div>

        {/* ── Mapa + Dirección ── */}
        <div className="flex flex-col lg:col-span-2 rounded-2xl bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          {" "}
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#b07a5a]">
            Ubicación
          </p>
          {/* Mapa — clic abre "cómo llegar" */}
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Frappé Liz, Rubén Mora, Barrio Primero, Cuautepec, Gro.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-xl"
            title="Cómo llegar a Frappé Liz"
          >
            <LazyImage
              src={liz}
              alt="Ubicación Frappé Liz"
              className="w-full h-[185px] object-cover rounded-xl"
            />
            {/* Overlay al hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20">
              <span className="flex translate-y-2 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#7c4a31] opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100">
                <FiExternalLink size={14} />
                Cómo llegar
              </span>
            </div>
          </a>
          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-50 text-[#7c4a31]">
                <FiMapPin size={15} />
              </span>
              <div>
                <p className="text-xs text-[#b07a5a]">Dirección</p>
                <p className="text-sm font-medium text-[#3a2a20]">
                  Rubén Mora, Barrio Primero
                </p>
                <p className="text-xs text-[#9a6a50]">
                  41840 Cuautepec, Gro., México
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-50 text-[#7c4a31]">
                <FiPhone size={15} />
              </span>
              <div>
                <p className="text-xs text-[#b07a5a]">Teléfono</p>
                <p className="text-sm font-medium text-[#3a2a20]">
                  745 111 9782
                </p>
              </div>
            </div>

            {/* boton de como llegar */}
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-50 text-[#7c4a31]">
                <FiExternalLink size={15} />
              </span>
              <div>
                <p className="text-xs text-[#b07a5a]">Cómo llegar</p>
                <a
                  href={COMO_LLEGAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#3a2a20] underline hover:text-[#7c4a31]"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Horarios + Correo ── */}
        <div className="flex flex-col rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(124,74,49,0.10)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#b07a5a]">
            Horarios
          </p>

          <div className="space-y-2">
            {horarios.map(({ dia, hora, abierto }) => {
              const esHoy = dia === hoy;

              return (
                <div
                  key={dia}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${
                    esHoy ? "bg-amber-900/70" : "bg-rose-50/60"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 text-sm ${
                      esHoy ? "text-white" : "text-[#5b3c2d]"
                    }`}
                  >
                    <FiClock
                      size={13}
                      className={`shrink-0 ${esHoy ? "text-white" : "text-[#b07a5a]"}`}
                    />
                    {dia}
                  </div>
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                      abierto
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {hora}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>{" "}
      {/* boton para subir a nav */}
      <div className="flex justify-center mt-8 md:hidden lg:hidden">
        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#7c4a31] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5b3c2d] active:scale-95"
        >
          ↑ Volver arriba
        </a>
      </div>
    </section>
  );
}
export { Contacto };
