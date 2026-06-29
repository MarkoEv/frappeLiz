import React from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { MdFastfood } from "react-icons/md";
import { RiDrinks2Line, RiDrinksFill } from "react-icons/ri";
import { GiPoolTriangle } from "react-icons/gi";
import { TbCookieFilled } from "react-icons/tb";
import { FaChevronLeft, FaChevronRight, FaHamburger } from "react-icons/fa";
import { allProducts } from "../productos/allProducts";
import { FiGrid, FiList } from "react-icons/fi";
import { LiaHamburgerSolid } from "react-icons/lia";

function Carta() {
  const [filtroActivo, setFiltroActivo] = React.useState(null);
  const [viewMode, setViewMode] = React.useState("cards");
  const [productoSeleccionado, setProductoSeleccionado] = React.useState(null);
  const swiperRef = React.useRef(null);

  const categories = {
    frappes: { icon: <RiDrinks2Line />, label: "Frappés" },
    waffles: { icon: <TbCookieFilled />, label: "Waffles" },
    tortas: { icon: <LiaHamburgerSolid />, label: "Tortas" },
    snacks: { icon: <MdFastfood />, label: "Snacks" },
    crepas: { icon: <GiPoolTriangle />, label: "Crepas" },
    eskimos: { icon: <RiDrinksFill />, label: "Eskimos" },
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

  return (
    <div className="flex flex-col gap-5 px-1">
      {/* Filtros */}
      <div className="flex items-center gap-1.5">
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
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition duration-500"
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
              onClick={() => setProductoSeleccionado(null)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-200"
              >
                <div className="relative">
                  <img
                    src={productoSeleccionado.image}
                    alt={productoSeleccionado.name}
                    className="w-full h-64 object-cover"
                  />

                  <button
                    onClick={() => setProductoSeleccionado(null)}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur text-stone-700 font-bold"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl font-bold text-stone-800">
                      {productoSeleccionado.name}
                    </h2>

                    <span className="text-lg font-bold text-[#7c4a31] whitespace-nowrap">
                      {productoSeleccionado.price}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                    {productoSeleccionado.desc}
                  </p>

                  <a
                    href={`https://wa.me/527451119782?text=Hola,%20me%20interesa%20${encodeURIComponent(
                      productoSeleccionado.name,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center w-full rounded-2xl bg-[#7c4a31] text-white py-3 font-medium hover:bg-[#5d3623] transition"
                  >
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
