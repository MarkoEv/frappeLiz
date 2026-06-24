import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiExternalLink,
} from "react-icons/fi";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiTiktokLine,
} from "react-icons/ri";

// Coordenadas de Frappé Liz, Cuautepec, Gro.
const COORDS = { lat: 16.7008, lng: -99.0172 };
const DIRECCION = "Rubén Mora, Barrio Primero, 41840 Cuautepec, Gro., México";
const PLACE_QUERY = "Frappé+Liz+Cuautepec+Guerrero";

const MAP_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5!2d${COORDS.lng}!3d${COORDS.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${PLACE_QUERY}!5e0!3m2!1ses!2smx!4v1700000000000`;
const COMO_LLEGAR = `https://www.google.com/maps/dir/?api=1&destination=${PLACE_QUERY}&destination_place_id=ChIJ`;

const horarios = [
  { dia: "Martes – Domingo", hora: "18:00 – 22:30", abierto: true },
  { dia: "Lunes", hora: "Cerrado", abierto: false },
];

function Contacto() {
  const waLink = "https://wa.me/5217451119782"; // ← pon tu número real

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
        <div className="flex flex-col rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(124,74,49,0.10)] sm:col-span-2 lg:col-span-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#b07a5a]">
            Escríbenos
          </p>
          <p className="mb-5 text-[15px] text-[#5b3c2d]">
            Pedidos, reservaciones y dudas
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 text-white transition hover:bg-[#1ebe5d] active:scale-95"
          >
            <FaWhatsapp size={28} />
            <div className="text-left">
              <p className="text-base font-semibold leading-tight">
                Chatear por WhatsApp
              </p>
              <p className="text-xs text-white/80">+52 671 234 5678</p>
            </div>
          </a>

          {/* Redes sociales */}
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.facebook.com/liizbetth.mrtnzferiia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-rose-100 py-2.5 text-sm font-medium text-[#5b3c2d] transition hover:bg-rose-50"
            >
              <RiFacebookBoxFill size={18} className="text-[#3b5998]" />
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@frappeliz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-rose-100 py-2.5 text-sm font-medium text-[#5b3c2d] transition hover:bg-rose-50"
            >
              <RiTiktokLine size={18} />
              TikTok
            </a>
          </div>
        </div>

        {/* ── Mapa + Dirección ── */}
        <div className="flex flex-col rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(124,74,49,0.10)]">
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
            <iframe
              title="Mapa Frappé Liz"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d${COORDS.lng}!3d${COORDS.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca43bfac0f91d5%3A0x1b2c3d4e5f6a7b8c!2sFrapp%C3%A9%20Liz!5e0!3m2!1ses!2smx!4v1700000000000`}
              width="100%"
              height="185"
              style={{ border: 0, pointerEvents: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
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
          </div>
        </div>

        {/* ── Horarios + Correo ── */}
        <div className="flex flex-col rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(124,74,49,0.10)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#b07a5a]">
            Horarios
          </p>

          <div className="space-y-2">
            {horarios.map(({ dia, hora, abierto }) => (
              <div
                key={dia}
                className="flex items-center justify-between rounded-lg bg-rose-50/60 px-3 py-2.5"
              >
                <div className="flex items-center gap-2 text-sm text-[#5b3c2d]">
                  <FiClock size={13} className="shrink-0 text-[#b07a5a]" />
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Contacto };
