import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const frappes = [
  {
    id: 1,
    tag: "clasico",
    emoji: "☕",
    name: "Frappé de café",
    desc: "Café espresso, leche entera y hielo. Cremoso y reconfortante.",
    price: "$65",
  },
  {
    id: 2,
    tag: "clasico",
    emoji: "🍫",
    name: "Frappé moka",
    desc: "Chocolate oscuro, espresso doble y crema batida.",
    price: "$70",
  },
  {
    id: 3,
    tag: "clasico",
    emoji: "🍦",
    name: "Frappé vainilla",
    desc: "Vainilla natural, leche condensada y hielo cremoso.",
    price: "$65",
  },
  {
    id: 4,
    tag: "frutal",
    emoji: "🍓",
    name: "Frappé fresa",
    desc: "Fresas frescas, leche y un toque de limón.",
    price: "$70",
  },
];

const tagBg = {
  clasico: "bg-amber-50",
  frutal: "bg-rose-50",
  especial: "bg-green-50",
};

const filters = [
  { key: "todos", label: "Todos" },
  { key: "clasico", label: "Clásico" },
  { key: "especial", label: "Especial" },
];

function Frappes() {
  const navigate = useNavigate();
  const [active, setActive] = useState("todos");

  const filtered =
    active === "todos" ? frappes : frappes.filter((f) => f.tag === active);

  return (
    <section className="rounded-2xl bg-white/90 p-8 shadow-[0_22px_60px_rgba(124,74,49,0.1)] md:p-12">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-rose-100 pb-6 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-xl border border-rose-200 bg-white px-4 py-2 text-sm text-[#7c4a31] transition-colors hover:bg-rose-50 active:scale-[0.98]"
        >
          ← Volver
        </button>
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl text-[#7c4a31] leading-tight">
            Frappés
          </h1>
          <p className="text-sm text-[#b07a5a] mt-0.5">Bebidas frías</p>
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
          {filtered.map((frappe) => (
            <div
              key={frappe.id}
              className="flex flex-col overflow-hidden rounded-xl border border-rose-100 bg-white transition-shadow hover:shadow-md"
            >
              {/* Imagen / placeholder */}
              <div
                className={`flex items-center justify-center text-4xl h-32 ${
                  tagBg[frappe.tag] ?? "bg-rose-50"
                }`}
              >
                {frappe.emoji}
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col p-3">
                <span className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#b07a5a]">
                  {frappe.tag}
                </span>
                <p className="text-sm font-bold text-[#7c4a31] leading-snug mb-1">
                  {frappe.name}
                </p>
                <p className="text-[11px] text-[#b07a5a] leading-relaxed flex-1">
                  {frappe.desc}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#7c4a31]">
                    {frappe.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export { Frappes };
