import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const frappes = [
  {
    id: 1,
    tag: "clasico",
    name: "Frappé de Café",
    desc: "Café espresso, leche entera y hielo frappé.",
    price: "$65",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    tag: "especial",
    name: "Frappé Moka",
    desc: "Chocolate oscuro, espresso doble y crema batida.",
    price: "$70",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    tag: "clasico",
    name: "Frappé Vainilla",
    desc: "Vainilla natural y leche cremosa.",
    price: "$65",
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    tag: "clasico",
    name: "Frappé de Fresa",
    desc: "Fresas frescas, leche y un toque especial.",
    price: "$70",
    image: "https://placehold.co/600x400",
  },
  {
    id: 5,
    tag: "especial",
    name: "Frappé Oreo",
    desc: "Galleta Oreo triturada y crema batida.",
    price: "$75",
    image: "https://placehold.co/600x400",
  },
  {
    id: 6,
    tag: "especial",
    name: "Frappé Nutella",
    desc: "Nutella original y leche cremosa.",
    price: "$80",
    image: "https://placehold.co/600x400",
  },
];

const filters = [
  { key: "todos", label: "Todos" },
  { key: "clasico", label: "Clásicos" },
  { key: "especial", label: "Especiales" },
];

function Frappes() {
  const navigate = useNavigate();
  const [active, setActive] = useState("todos");

  const filtered =
    active === "todos" ? frappes : frappes.filter((f) => f.tag === active);

  return (
    <section className="rounded-3xl bg-white p-4 sm:p-6 md:p-8 shadow-[0_20px_60px_rgba(124,74,49,0.08)]">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3 border-b border-rose-100 pb-5">
        <button
          onClick={() => navigate(-1)}
          className="rounded-xl border border-rose-200 bg-white px-3 py-2 text-sm font-medium text-[#7c4a31] transition hover:bg-rose-50"
        >
          ← Volver
        </button>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#7c4a31]">
            Frappés
          </h1>
          <p className="text-xs sm:text-sm text-[#b07a5a]">
            Bebidas frías preparadas al momento
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
              active === f.key
                ? "bg-[#7c4a31] text-white"
                : "border border-rose-200 text-[#7c4a31] hover:bg-rose-50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Productos */}
      {filtered.length === 0 ? (
        <div className="py-12 text-center text-[#b07a5a]">
          No hay productos en esta categoría.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((frappe) => (
            <div
              key={frappe.id}
              className="group overflow-hidden rounded-xl border border-rose-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Imagen */}
              <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
                <img
                  src={frappe.image}
                  alt={frappe.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Precio */}
                <div className="absolute right-2 top-2 rounded-full bg-[#7c4a31] px-3 py-1 text-xs font-bold text-white shadow-lg">
                  {frappe.price}
                </div>

                {/* Categoría */}
                <div className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#7c4a31] backdrop-blur">
                  {frappe.tag}
                </div>
              </div>

              {/* Información */}
              <div className="p-3">
                <h3 className="mb-1 line-clamp-2 text-sm md:text-base font-bold text-[#7c4a31]">
                  {frappe.name}
                </h3>

                <p className="line-clamp-2 text-xs md:text-sm leading-relaxed text-[#b07a5a]">
                  {frappe.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export { Frappes };
