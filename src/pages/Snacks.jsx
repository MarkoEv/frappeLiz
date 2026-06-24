import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHamburger,
  FaHotdog,
  FaUtensils,
  FaGlassWhiskey,
} from "react-icons/fa";

import { GiSandwich, GiSausage, GiNoodles, GiMilkCarton } from "react-icons/gi";

import { MdGridView } from "react-icons/md";

/* ------------------- PRODUCTOS ------------------- */
const snacks = [
  {
    id: 1,
    category: "hamburguesas",
    name: "Hamburguesa Clásica",
    desc: "Carne de res, queso amarillo, lechuga y jitomate.",
    price: "$65",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    category: "hotdogs",
    name: "Hot Dog Especial",
    desc: "Salchicha jumbo con aderezos y papas.",
    price: "$45",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    category: "papas",
    name: "Papas a la Francesa",
    desc: "Crujientes, doradas y recién hechas.",
    price: "$55",
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    category: "tortas",
    name: "Torta de Jamón",
    desc: "Pan crujiente con jamón, queso y vegetales.",
    price: "$60",
    image: "https://placehold.co/600x400",
  },
  {
    id: 5,
    category: "salchipapas",
    name: "Salchipapas",
    desc: "Papas con salchicha y aderezos.",
    price: "$70",
    image: "https://placehold.co/600x400",
  },
];

/* ------------------- FILTROS CON ICONOS ------------------- */
const filters = [
  { key: "todos", icon: <MdGridView size={20} />, tooltip: "Todos" },
  { key: "tortas", icon: <GiSandwich size={20} />, tooltip: "Tortas" },
  {
    key: "hamburguesas",
    icon: <FaHamburger size={20} />,
    tooltip: "Hamburguesas",
  },
  { key: "hotdogs", icon: <FaHotdog size={20} />, tooltip: "Hot Dogs" },
  { key: "papas", icon: <FaUtensils size={20} />, tooltip: "Papas" },
  { key: "salchipapas", icon: <GiSausage size={20} />, tooltip: "Salchipapas" },
  { key: "sopas", icon: <GiNoodles size={20} />, tooltip: "Sopas" },
  { key: "licuados", icon: <GiMilkCarton size={20} />, tooltip: "Licuados" },
  { key: "bebidas", icon: <FaGlassWhiskey size={20} />, tooltip: "Bebidas" },
];

/* ------------------- COMPONENTE ------------------- */
function Snacks() {
  const navigate = useNavigate();
  const [active, setActive] = useState("todos");

  const filtered =
    active === "todos"
      ? snacks
      : snacks.filter((item) => item.category === active);

  return (
    <section className="rounded-3xl bg-white p-4 sm:p-6 md:p-8 shadow-[0_20px_60px_rgba(124,74,49,0.08)]">
      {/* HEADER */}
      <div className="mb-6 flex items-center gap-3 border-b border-rose-100 pb-5">
        <button
          onClick={() => navigate(-1)}
          className="rounded-xl border border-rose-200 bg-white px-3 py-2 text-sm font-medium text-[#7c4a31] hover:bg-rose-50"
        >
          ← Volver
        </button>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#7c4a31]">
            Snacks
          </h1>
          <p className="text-xs sm:text-sm text-[#b07a5a]">
            Snacks preparados al momento
          </p>
        </div>
      </div>

      {/* FILTROS */}
      <div className="mb-6 flex flex-wrap justify-center gap-1">
        {filters.map((f) => (
          <button
            key={f.key}
            title={f.tooltip}
            onClick={() => setActive(f.key)}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              active === f.key
                ? "bg-[#7c4a31] text-white border-[#7c4a31] shadow-md"
                : "border-rose-200 bg-white text-[#7c4a31] hover:bg-rose-50"
            }`}
          >
            {f.icon}

            {/* tooltip */}
            <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-[#7c4a31] px-2 py-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition">
              {f.tooltip}
            </span>
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filtered.length === 0 ? (
          <p className="col-span-full py-10 text-center text-[#b07a5a]">
            No hay productos en esta categoría.
          </p>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-xl border border-rose-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* IMAGEN */}
              <div className="relative h-28 sm:h-32 md:h-36 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* PRECIO */}
                <div className="absolute right-2 top-2 rounded-full bg-[#7c4a31] px-3 py-1 text-xs font-bold text-white shadow-lg">
                  {item.price}
                </div>
              </div>

              {/* INFO */}
              <div className="p-3">
                <h3 className="mb-1 text-sm font-bold text-[#7c4a31]">
                  {item.name}
                </h3>

                <p className="text-xs text-[#b07a5a] line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export { Snacks };
