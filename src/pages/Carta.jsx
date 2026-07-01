import React from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { MdFastfood } from "react-icons/md";
import { RiDrinks2Line, RiCupLine, RiCake3Line } from "react-icons/ri";
import { GiPoolTriangle } from "react-icons/gi";
import { TbCookieFilled } from "react-icons/tb";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHamburger,
  FaWhatsapp,
} from "react-icons/fa";
import { allProducts } from "../productos/allProducts";
import { FiGrid, FiList } from "react-icons/fi";
import { LiaHamburgerSolid } from "react-icons/lia";
import { GiIceCreamCone, GiHotDog } from "react-icons/gi";

// import image no-found
import noFoundImage from "../../public/images/no-found.png";

function Carta() {
  const [filtroActivo, setFiltroActivo] = React.useState(null);
  const [viewMode, setViewMode] = React.useState("cards");
  const [productoSeleccionado, setProductoSeleccionado] = React.useState(null);
  const swiperRef = React.useRef(null);

  const categories = {
    frappes: {
      icon: <RiDrinks2Line />,
      label: "Frappés",
    },
    waffles: {
      icon: <TbCookieFilled />,
      label: "Waffles",
    },
    tortas: {
      icon: <LiaHamburgerSolid />,
      label: "Tortas",
    },
    snacks: {
      icon: <MdFastfood />,
      label: "Snacks",
    },
    crepas: {
      icon: <RiCake3Line />,
      label: "Crepas",
    },
    eskimos: {
      icon: <GiIceCreamCone />,
      label: "Eskimos",
    },
    banderillas: {
      icon: <GiHotDog />,
      label: "Banderillas",
    },
    bebidas: {
      icon: <RiCupLine />,
      label: "Bebidas",
    },
  };

  const productosFiltrados = filtroActivo
    ? allProducts.filter((p) => p.tag === filtroActivo)
    : allProducts;

  const Chip = ({ activo, onClick, icon, label }) => (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs
        font-medium tracking-wide whitespace-nowrap transition-all duration-200
        active:scale-95 cursor-pointer select-none border
        ${
          activo
            ? "bg-[#7c4a31] border-[#7c4a31] text-white"
            : "bg-white border-rose-100 text-stone-500 hover:border-rose-300 hover:text-[#7c4a31]"
        }
      `}
    >
      {icon && (
        <span
          className={`text-sm leading-none ${activo ? "text-rose-200" : "text-[#7c4a31]"}`}
        >
          {icon}
        </span>
      )}
      {label}
    </button>
  );

  // animation modal salida
  const [isClosing, setIsClosing] = React.useState(false);
  const cerrarModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setProductoSeleccionado(null);
      setIsClosing(false);
    }, 250);
  };

  return (
    <div className="flex flex-col gap-5 px-1">
      {/* Filtros */}
      <div className="flex items-center gap-1.">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="shrink-0 w-7 h-7 rounded-full border border-rose-100 bg-white text-stone-400 hover:text-[#7c4a31] hover:border-rose-300 transition-colors flex items-center justify-center"
        >
          <FaChevronLeft className="text-[10px]" />
        </button>

        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          slidesPerView="auto"
          spaceBetween={6}
          freeMode
          modules={[FreeMode]}
          className="!overflow-hidden flex-1"
        >
          <SwiperSlide className="!w-auto">
            <Chip
              activo={filtroActivo === null}
              onClick={() => setFiltroActivo(null)}
              label="Todos"
            />
          </SwiperSlide>

          {Object.entries(categories).map(([key, cat]) => (
            <SwiperSlide key={key} className="!w-auto">
              <Chip
                activo={filtroActivo === key}
                onClick={() => setFiltroActivo(key)}
                icon={cat.icon}
                label={cat.label}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="shrink-0 w-7 h-7 rounded-full border border-rose-100 bg-white text-stone-400 hover:text-[#7c4a31] hover:border-rose-300 transition-colors flex items-center justify-center"
        >
          <FaChevronRight className="text-[10px]" />
        </button>
      </div>

      <div className="flex items-center justify-between px-1">
        <p className="text-[10px] tracking-widest text-stone-400 uppercase">
          {productosFiltrados.length} producto
          {productosFiltrados.length !== 1 ? "s" : ""}
          {filtroActivo && ` · ${categories[filtroActivo]?.label}`}
        </p>

        <div className="flex items-center bg-white rounded-xl border border-stone-200 p-1">
          <button
            onClick={() => setViewMode("cards")}
            className={`p-2 rounded-lg transition ${
              viewMode === "cards"
                ? "bg-[#7c4a31] text-white"
                : "text-stone-500 hover:text-[#7c4a31]"
            }`}
          >
            <FiGrid size={15} />
          </button>

          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition ${
              viewMode === "list"
                ? "bg-[#7c4a31] text-white"
                : "text-stone-500 hover:text-[#7c4a31]"
            }`}
          >
            <FiList size={15} />
          </button>
        </div>
      </div>

      {productosFiltrados.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-20 text-center">
          <span className="text-4xl">🍽️</span>
          <p className="text-sm text-stone-400">
            Nada en esta categoría todavía
          </p>
        </div>
      ) : (
        <>
          {/* Vista Cards */}
          {viewMode === "cards" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
              {productosFiltrados.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setProductoSeleccionado(p)}
                  className="group cursor-pointer bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Usamos flex-col en móvil para que el nombre quede abajo, y sm:flex-row para pantallas grandes */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* IMAGEN + PRECIO */}
                    <div className="relative w-full aspect-square sm:w-28 sm:h-28 shrink-0 flex flex-col items-center justify-center">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.onerror = null; // evita loop infinito si el fallback también falla
                          e.currentTarget.src = noFoundImage;
                        }}
                        className="w-full h-full object-cover rounded-2xl "
                      />

                      {/* Precio flotante */}
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#7c4a31] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap z-10">
                        {p.price}
                      </span>
                    </div>

                    {/* NOMBRE SOLO EN MÓVIL (Aparece abajo de la imagen de forma limpia) */}
                    <div className="sm:hidden flex flex-col items-center pt-2">
                      <span className="text-[11px] text-center font-semibold text-stone-800 leading-tight line-clamp-2">
                        {p.name}
                      </span>
                    </div>

                    {/* CONTENIDO DESKTOP (SM en adelante) */}
                    <div className="hidden sm:flex flex-col flex-1 min-w-0">
                      <h3 className="font-bold text-stone-800 truncate">
                        {p.name}
                      </h3>

                      <p className="text-xs text-stone-500 mt-1 line-clamp-3">
                        {p.desc}
                      </p>

                      <div className="mt-auto pt-2">
                        <span className="text-[11px] uppercase tracking-widest text-[#7c4a31] font-semibold">
                          {categories[p.tag]?.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Vista Lista */}
          {viewMode === "list" && (
            <div className="flex flex-col gap-3">
              {productosFiltrados.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setProductoSeleccionado(p)}
                  className="cursor-pointer bg-white rounded-2xl p-3 border border-stone-100 hover:shadow-md transition"
                >
                  {" "}
                  <div className="flex gap-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.onerror = null; // evita loop infinito si el fallback también falla
                        e.currentTarget.src = noFoundImage;
                      }}
                      className="w-24 h-24 rounded-xl object-cover"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-3">
                        <div>
                          <h3 className="font-semibold text-stone-800">
                            {p.name}
                          </h3>

                          <p className="text-sm text-stone-500 mt-1 line-clamp-2">
                            {p.desc}
                          </p>
                        </div>

                        <span className="font-bold text-[#7c4a31] whitespace-nowrap">
                          {p.price}
                        </span>
                      </div>

                      <span className="inline-block mt-3 text-xs bg-rose-50 text-[#7c4a31] px-3 py-1 rounded-full">
                        {categories[p.tag]?.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {productoSeleccionado && (
            <div
              className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#1a120c]/60 backdrop-blur-sm transition-opacity duration-250 ${
                isClosing ? "opacity-0" : "opacity-100"
              }`}
              onClick={cerrarModal}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className={`relative bg-white w-full sm:max-w-md rounded-t-[28px] sm:rounded-[28px] overflow-hidden transition-transform duration-250 ease-out ${
                  isClosing
                    ? "translate-y-full sm:translate-y-4 sm:opacity-0"
                    : "translate-y-0 sm:opacity-100"
                }`}
              >
                {/* Botón cerrar */}
                <button
                  onClick={cerrarModal}
                  aria-label="Cerrar"
                  className="absolute cursor-pointer top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-stone-600 hover:bg-white transition"
                >
                  <span className="text-base">✕</span>
                </button>

                {/* Header con imagen pequeña */}
                <div className="flex gap-3.5 px-5 pt-5">
                  <img
                    src={productoSeleccionado.image}
                    alt={productoSeleccionado.name}
                    className="w-24 h-24 rounded-2xl object-cover shrink-0"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = noFoundImage;
                    }}
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-center pr-8">
                    <span className="text-[11px] tracking-widest uppercase text-[#7c4a31] font-medium">
                      {categories[productoSeleccionado.tag]?.label}
                    </span>
                    <h2 className="mt-1 text-[19px] font-bold text-stone-800 leading-tight">
                      {productoSeleccionado.name}
                    </h2>
                    <span className="mt-1.5 text-xl font-bold text-stone-900">
                      {productoSeleccionado.price}
                    </span>
                  </div>
                </div>

                {/* Descripción */}
                <p className="px-5 pt-4 text-sm text-stone-500 leading-relaxed">
                  {productoSeleccionado.desc ||
                    "Disfruta de esta deliciosa especialidad preparada al momento."}
                </p>

                {/* Productos relacionados (misma categoría) */}
                {(() => {
                  const relacionados = allProducts.filter(
                    (p) =>
                      p.tag === productoSeleccionado.tag &&
                      p.id !== productoSeleccionado.id,
                  );

                  if (relacionados.length === 0) return null;

                  return (
                    <div className="pt-4">
                      <p className="px-5 mb-2 text-xs text-stone-400">
                        También te puede gustar
                      </p>
                      <Swiper
                        slidesPerView="auto"
                        spaceBetween={10}
                        freeMode
                        modules={[FreeMode]}
                        className="!px-5 !pb-1"
                      >
                        {relacionados.map((p) => (
                          <SwiperSlide key={p.id} className="!w-[72px]">
                            <button
                              onClick={() => setProductoSeleccionado(p)}
                              className="w-[72px] h-[72px] rounded-2xl border-2 border-stone-200 hover:border-[#7c4a31] overflow-hidden p-[3px] transition-colors"
                            >
                              <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-full rounded-xl object-cover cursor-pointer"
                                onError={(e) => {
                                  e.currentTarget.onerror = null;
                                  e.currentTarget.src = noFoundImage;
                                }}
                              />
                            </button>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  );
                })()}

                {/* Footer: WhatsApp */}
                <div className="p-5">
                  <a
                    href={`https://wa.me/527451119782?text=${encodeURIComponent(
                      `Hola, me interesa ordenar: ${productoSeleccionado.name}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-[52px] rounded-2xl bg-[#25D366] text-white font-semibold flex items-center justify-center gap-2 hover:brightness-95 active:scale-[0.98] transition"
                  >
                    <FaWhatsapp className="text-lg" />
                    Pedir por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export { Carta };
