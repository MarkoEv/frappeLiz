import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const esquimos = [
  {
    id: 1,
    tag: "clasico",
    emoji: "🍓",
    name: "Esquimo fresa",
    desc: "Leche, fresas naturales y azúcar. Frío y refrescante.",
    price: "$55",
  },
  {
    id: 2,
    tag: "clasico",
    emoji: "🍫",
    name: "Esquimo chocolate",
    desc: "Leche entera, cocoa y un toque de vainilla.",
    price: "$55",
  },
  {
    id: 3,
    tag: "clasico",
    emoji: "🍦",
    name: "Esquimo vainilla",
    desc: "Vainilla natural, leche fría y hielo picado.",
    price: "$50",
  },
  {
    id: 4,
    tag: "frutal",
    emoji: "🥭",
    name: "Esquimo mango",
    desc: "Mango de temporada con leche condensada y chile piquín.",
    price: "$60",
  },
  {
    id: 5,
    tag: "frutal",
    emoji: "🍍",
    name: "Esquimo piña",
    desc: "Piña fresca, leche de coco y hielo raspado.",
    price: "$60",
  },
  {
    id: 6,
    tag: "frutal",
    emoji: "🍑",
    name: "Esquimo durazno",
    desc: "Durazno natural, leche y un toque de canela.",
    price: "$58",
  },
  {
    id: 7,
    tag: "especial",
    emoji: "🌮",
    name: "Esquimo tamarindo",
    desc: "Tamarindo natural, leche y chamoy. Dulce y picosito.",
    price: "$65",
  },
  {
    id: 8,
    tag: "especial",
    emoji: "🫙",
    name: "Esquimo cajeta",
    desc: "Cajeta artesanal, leche entera y nuez picada.",
    price: "$65",
  },
  {
    id: 9,
    tag: "especial",
    emoji: "🍬",
    name: "Esquimo mazapán",
    desc: "Mazapán de la Rosa triturado con leche y crema.",
    price: "$68",
  },
];

const tagBg = {
  clasico: "bg-amber-50",
  frutal: "bg-rose-50",
  especial: "bg-purple-50",
};

const filters = [
  { key: "todos", label: "Todos" },
  { key: "clasico", label: "Clásico" },
  { key: "frutal", label: "Frutal" },
  { key: "especial", label: "Especial" },
];

function Esquimos() {
  const navigate = useNavigate();
  const [active, setActive] = useState("todos");

  const filtered =
    active === "todos" ? esquimos : esquimos.filter((e) => e.tag === active);

  return (
    <section className="rounded-2xl bg-white/90 p-8 shadow-[0_22px_60px_rgba(124,74,49,0.1)] md:p-12">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-rose-100 pb-6 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-xl border border-rose-200 bg-white px-4 py-2 text-sm text-[#7c4a31] transition-colors hover:bg-rose-50 active:scale-[0.98]"
        >
          ← Carta
        </button>
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl text-[#7c4a31] leading-tight">
            Esquimos
          </h1>
          <p className="text-sm text-[#b07a5a] mt-0.5">
            Bebidas heladas con sabores únicos
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
              active === f.key
                ? "bg-[#7c4a31] text-white border-[#7c4a31]"
                : "border-rose-200 text-[#7c4a31] hover:bg-rose-50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid de productos */}
      {filtered.length === 0 ? (
        <p className="text-center text-sm text-[#b07a5a] py-12">
          Sin productos en esta categoría.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((esquimo) => (
            <div
              key={esquimo.id}
              className="flex flex-col overflow-hidden rounded-xl border border-rose-100 bg-white transition-shadow hover:shadow-md"
            >
              {/* Imagen / placeholder */}
              <div
                className={`flex items-center justify-center text-4xl h-32 ${
                  tagBg[esquimo.tag] ?? "bg-rose-50"
                }`}
              >
                {esquimo.emoji}
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col p-3">
                <span className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#b07a5a]">
                  {esquimo.tag}
                </span>
                <p className="text-sm font-bold text-[#7c4a31] leading-snug mb-1">
                  {esquimo.name}
                </p>
                <p className="text-[11px] text-[#b07a5a] leading-relaxed flex-1">
                  {esquimo.desc}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#7c4a31]">
                    {esquimo.price}
                  </span>
                  <button className="rounded-lg bg-[#7c4a31] px-3 py-1.5 text-[11px] font-semibold text-white transition-opacity hover:opacity-80 active:scale-[0.97]">
                    Ordenar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export { Esquimos };
