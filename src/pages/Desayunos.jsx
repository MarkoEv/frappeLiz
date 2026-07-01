import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaWhatsapp } from "react-icons/fa";
import { FiPackage, FiClock, FiStar, FiHeart } from "react-icons/fi";
import { LuPartyPopper } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";

import {
  FaChalkboardTeacher,
  FaBirthdayCake,
  FaUserFriends,
  FaGraduationCap,
  FaHeart,
  FaGift,
} from "react-icons/fa";

// imagenes desayunos
import desayuno1 from "../../public/desayunos/desayuno1.jpeg";
import desayuno2 from "../../public/desayunos/desayuno2.jpeg";
import desayuno3 from "../../public/desayunos/desayuno3.jpeg";
import desayuno4 from "../../public/desayunos/desayuno4.jpeg";
import desayuno5 from "../../public/desayunos/desayuno5.jpeg";
import desayuno6 from "../../public/desayunos/desayuno6.jpeg";
import desayuno7 from "../../public/desayunos/desayuno7.jpeg";

const desayunos = [
  desayuno1,
  desayuno2,
  desayuno3,
  desayuno4,
  desayuno5,
  desayuno6,
  desayuno7,
];

// 6 imagenes de entregas
import entrega1 from "../../public/desayunos/entregas1.jpeg";
import entrega2 from "../../public/desayunos/entregas2.jpeg";
import entrega3 from "../../public/desayunos/entregas3.jpeg";
import entrega5 from "../../public/desayunos/entregas5.jpeg";
import entrega4 from "../../public/desayunos/entregas6.jpeg";

import hero from "../../public/desayunos/hero.webp";

const entregas = [entrega1, entrega2, entrega3, entrega4, entrega5];

// ── Configura tu número aquí ──────────────────────────────────────────
const WA_NUMBER = "527451119782";
const waLink = (msg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const baseIcon = "text-[#7c4a31] transition-transform duration-300";

const iconClass =
  "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl " +
  "text-[#7c4a31] transition-all duration-300 group-hover:scale-110"; // ── Eventos especiales ─────────────────────────────────────────────────
const eventos = [
  {
    icon: <FaChalkboardTeacher className={baseIcon} />,
    label: "Día del Maestro",
    fecha: "15 mayo",
  },
  {
    icon: <FaGift className={baseIcon} />,
    label: "Día de las Madres",
    fecha: "10 mayo",
  },
  {
    icon: <FaUserFriends className={baseIcon} />,
    label: "Día del Padre",
    fecha: "15 jun",
  },
  {
    icon: <FaGraduationCap className={baseIcon} />,
    label: "Graduaciones",
    fecha: "Jun – Jul",
  },
  {
    icon: <FaHeart className={baseIcon} />,
    label: "San Valentín",
    fecha: "14 feb",
  },
  {
    icon: <FaBirthdayCake className={baseIcon} />,
    label: "Cumpleaños",
    fecha: "Todo el año",
  },
];

// ── Fotos de clientes (placeholders) ──────────────────────────────────
const fotos = [
  {
    id: 1,
    texto: "Un detalle perfecto para sorprender en cualquier ocasión.",
  },
  {
    id: 2,
    texto: "Presentación cuidada y sabor que supera expectativas.",
  },
  {
    id: 3,
    texto: "Ideal para celebrar momentos especiales con estilo.",
  },
  {
    id: 4,
    texto: "Entrega puntual y experiencia completamente satisfactoria.",
  },
  {
    id: 5,
    texto: "La mejor forma de hacer especial cualquier mañana.",
  },
];

// ── Beneficios de entrega ──────────────────────────────────────────────
const beneficios = [
  {
    // icono de moto
    icon: <MdDeliveryDining size={22} />,
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
hero;
export function Desayunos() {
  return (
    <section className="w-full">
      {/* ══ HERO UNIVERSAL (SPLIT-SCREEN ADAPTATIVO) ══════════════════════════════════════════════════════ */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-stone-50 to-orange-50/50 border border-stone-200/60 shadow-sm grid grid-cols-1 md:grid-cols-12 items-stretch">
        {/* IMAGEN: Superior en móvil, lateral en escritorio. Ocupa 5 columnas en pantallas grandes */}
        <div className="relative w-full h-[240px] sm:h-[320px] md:h-auto md:col-span-5 overflow-hidden">
          <img
            src={hero}
            alt="Desayuno sorpresa"
            className="w-full h-100 object-cover select-none "
          />
          {/* Degradado sutil inferior exclusivo para móviles para suavizar el corte con el fondo */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50/50 via-transparent to-transparent md:hidden" />
        </div>

        {/* TEXTO Y CONTENIDO: Abajo en móvil, al lado en escritorio. Ocupa 7 columnas */}
        <div className="p-6 sm:p-10 md:p-8 lg:p-14 md:col-span-7 flex flex-col justify-center text-center md:text-left">
          {/* Título adaptable */}
          <h1 className="mb-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-800 tracking-tight leading-tight md:leading-none">
            Haz que su mañana <br className="hidden sm:block" />
            <span className="text-[#7c4a31]">sea inolvidable</span>
          </h1>

          {/* Descripción adaptable */}
          <p className="mb-6 max-w-md mx-auto md:mx-0 text-xs sm:text-sm lg:text-base leading-relaxed text-[#9a6a50] ">
            Desayunos preparados cuidadosamente, presentación especial y entrega
            a domicilio para sorprender a quien más quieres.
          </p>

          {/* Botón de WhatsApp de ancho completo en móvil, auto en escritorio */}
          <div className="w-full md:w-auto">
            <a
              href={waLink("Hola! Quiero pedir un desayuno sorpresa")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-[#25D366] px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-md shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#1ebe5d] active:scale-95"
            >
              <FaWhatsapp className="text-lg sm:text-xl" />
              Ordenar una Sorpresa
            </a>
          </div>
        </div>
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
      <div className="mb-16">
        <h2 className="mb-3 text-center text-3xl font-bold text-[#7c4a31]">
          Nuestros Desayunos
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-[#9a6a50]">
          Cada detalle está preparado cuidadosamente para sorprender a esa
          persona especial.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {desayunos.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 ">
                <div className="relative overflow-hidden">
                  <img
                    src={img}
                    alt={`Desayuno ${index + 1}`}
                    className="h-[280px] w-full object-cover "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>

                <div className="p-4">
                  <p className="mt-1 text-sm text-[#9a6a50]">
                    Preparado con ingredientes frescos y presentación especial.
                  </p>
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
          perfecto.
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {eventos.map(({ icon, label, fecha }) => (
            <a
              key={label}
              href={waLink(`Hola! Me interesa un desayuno sorpresa 🎉`)}
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
                <img
                  src={entregas[id - 1]}
                  alt={`Entrega ${id}`}
                  className="h-100 w-full object-cover"
                />
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mb-3 text-sm italic leading-relaxed text-[#5b3c2d]">
                    "{texto}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* boton para subir a nav */}
      <div className="flex justify-center mt-8">
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

export default Desayunos;
