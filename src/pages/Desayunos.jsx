import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaWhatsapp } from "react-icons/fa";
import { FiPackage, FiClock, FiStar, FiHeart } from "react-icons/fi";
import { LuPartyPopper } from "react-icons/lu";

// ── Configura tu número aquí ──────────────────────────────────────────
const WA_NUMBER = "5216712345678";
const waLink = (msg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// ── Eventos especiales ─────────────────────────────────────────────────
const eventos = [
  { icon: "👩‍🏫", label: "Día del Maestro", fecha: "15 mayo" },
  { icon: "💐", label: "Día de las Madres", fecha: "10 mayo" },
  { icon: "👨‍👩‍👧", label: "Día del Padre", fecha: "15 jun" },
  { icon: "🎓", label: "Graduaciones", fecha: "Jun – Jul" },
  { icon: "💑", label: "San Valentín", fecha: "14 feb" },
  { icon: "🎂", label: "Cumpleaños", fecha: "Todo el año" },
];

// ── Fotos de clientes (placeholders) ──────────────────────────────────
const fotos = [
  {
    id: 1,
    nombre: "María G.",
    texto: "¡El mejor desayuno sorpresa que he recibido! 😍",
  },
  {
    id: 2,
    nombre: "Ana L.",
    texto: "Llegó súper bien presentado, me encantó 🧁",
  },
  {
    id: 3,
    nombre: "Karla M.",
    texto: "Lo pedí para el día de las madres y quedó hermoso 💐",
  },
  {
    id: 4,
    nombre: "Sofía R.",
    texto: "Riquísimo y muy detallado, lo recomiendo 100% ⭐",
  },
  {
    id: 5,
    nombre: "Fernanda T.",
    texto: "La entrega fue puntual y el frappé delicioso 🥤",
  },
];

// ── Beneficios de entrega ──────────────────────────────────────────────
const beneficios = [
  {
    icon: <FiPackage size={22} />,
    titulo: "Entrega a domicilio",
    desc: "Llevamos tu desayuno sorpresa directo a la puerta",
  },
  {
    icon: <FiClock size={22} />,
    titulo: "Puntualidad garantizada",
    desc: "Coordinamos la hora exacta que necesitas",
  },
  {
    icon: <FiHeart size={22} />,
    titulo: "Presentación especial",
    desc: "Cada detalle empacado con amor y cuidado",
  },
  {
    icon: <FiStar size={22} />,
    titulo: "Personalizable",
    desc: "Elige lo que más le gusta a esa persona especial",
  },
];

// ── Placeholder para imágenes ──────────────────────────────────────────
function ImgPlaceholder({ size = "full", label = "Foto" }) {
  const cls = size === "sq" ? "aspect-square w-full" : "aspect-[4/3] w-full";
  return (
    <div
      className={`${cls} flex flex-col items-center justify-center gap-2 rounded-2xl bg-rose-100/60`}
    >
      <span className="text-3xl">📷</span>
      <span className="text-xs font-medium text-[#b07a5a]">{label}</span>
    </div>
  );
}

export function Desayunos() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-[#7c4a31] px-6 py-12 text-center sm:py-16">
        {/* Decoración de fondo */}
        <span className="pointer-events-none absolute -left-8 -top-8 text-[120px] opacity-10 select-none">
          🧋
        </span>
        <span className="pointer-events-none absolute -right-8 -bottom-8 text-[120px] opacity-10 select-none">
          🍓
        </span>

        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-rose-200">
          desayunos sorpresa
        </p>
        <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Haz que su mañana
          <br />
          <span className="text-rose-300">sea inolvidable</span>
        </h1>
        <p className="mx-auto mb-8 max-w-md text-[15px] text-rose-100/90">
          Desayunos preparados con amor, presentación impecable y entrega a
          domicilio en Cuautepec. Porque los detalles importan. 🫶
        </p>

        <a
          href={waLink("Hola! Quiero pedir un desayuno sorpresa 🧋")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#1ebe5d] active:scale-95"
        >
          <FaWhatsapp size={22} />
          Pedir mi desayuno sorpresa
        </a>
      </div>

      {/* ══ BENEFICIOS DE ENTREGA ═════════════════════════════════════ */}
      <div className="mb-12">
        <p className="mb-1 text-center text-xs uppercase tracking-widest text-[#b07a5a]">
          entrega a domicilio
        </p>
        <h2 className="mb-6 text-center text-2xl font-bold text-[#7c4a31] sm:text-3xl">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map(({ icon, titulo, desc }) => (
            <div
              key={titulo}
              className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-[0_6px_24px_rgba(124,74,49,0.09)] transition hover:-translate-y-1"
            >
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-[#7c4a31]">
                {icon}
              </span>
              <p className="mb-1 text-sm font-semibold text-[#3a2a20]">
                {titulo}
              </p>
              <p className="text-xs leading-relaxed text-[#9a6a50]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══ GALERÍA CON SWIPER ════════════════════════════════════════ */}
      <div className="mb-12">
        <p className="mb-1 text-center text-xs uppercase tracking-widest text-[#b07a5a]">
          nuestros desayunos
        </p>
        <h2 className="mb-6 text-center text-2xl font-bold text-[#7c4a31] sm:text-3xl">
          Así se ven por dentro 😍
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="!pb-10"
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <SwiperSlide key={n}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(124,74,49,0.10)]">
                <ImgPlaceholder size="sq" label={`Desayuno ${n}`} />
                <div className="p-3">
                  <p className="text-xs font-semibold text-[#5b3c2d]">
                    Desayuno Sorpresa #{n}
                  </p>
                  <p className="text-[11px] text-[#b07a5a]">Frappé Liz</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ══ EVENTOS ESPECIALES ════════════════════════════════════════ */}
      <div className="mb-12 rounded-3xl bg-rose-50 px-5 py-8 sm:px-8">
        <div className="mb-6 flex items-center justify-center gap-2">
          <LuPartyPopper size={20} className="text-[#7c4a31]" />
          <h2 className="text-2xl font-bold text-[#7c4a31] sm:text-3xl">
            Fechas especiales
          </h2>
        </div>
        <p className="mx-auto mb-7 max-w-lg text-center text-sm text-[#9a6a50]">
          Anticipa tu pedido y sorprende a quien más quieres en el momento
          perfecto 🎉
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {eventos.map(({ icon, label, fecha }) => (
            <a
              key={label}
              href={waLink(
                `Hola! Me interesa un desayuno sorpresa para ${label} (${fecha}) 🎉`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-2xl bg-white px-3 py-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md active:scale-95"
            >
              <span className="text-3xl">{icon}</span>
              <p className="text-xs font-semibold text-[#3a2a20]">{label}</p>
              <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-medium text-[#7c4a31]">
                {fecha}
              </span>
            </a>
          ))}
        </div>

        {/* CTA debajo de eventos */}
        <div className="mt-7 text-center">
          <a
            href={waLink(
              "Hola! Quiero pedir un desayuno para una fecha especial 🎉",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5d] active:scale-95"
          >
            <FaWhatsapp size={18} />
            Apartar mi fecha por WhatsApp
          </a>
        </div>
      </div>

      {/* ══ FOTOS DE CLIENTES (Swiper) ════════════════════════════════ */}
      <div className="mb-4">
        <p className="mb-1 text-center text-xs uppercase tracking-widest text-[#b07a5a]">
          clientes felices
        </p>
        <h2 className="mb-6 text-center text-2xl font-bold text-[#7c4a31] sm:text-3xl">
          Lo que dicen de nosotros 💬
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10!"
        >
          {fotos.map(({ id, nombre, texto }) => (
            <SwiperSlide key={id}>
              <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(124,74,49,0.10)]">
                <ImgPlaceholder size="sq" label={`Foto cliente ${id}`} />
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-[#5b3c2d]">
                    "{texto}"
                  </p>
                  <p className="text-xs font-semibold text-[#b07a5a]">
                    — {nombre}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Desayunos;
