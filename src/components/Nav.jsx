import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiBook, FiMapPin } from "react-icons/fi";
import { MdDeliveryDining } from "react-icons/md";
import logo from "../../public/logos/vasos.png";

const links = [
  { to: "/", label: "Carta", icon: <FiBook size={20} /> },
  {
    to: "/desayunos",
    label: "Desayunos",
    icon: <MdDeliveryDining size={22} />,
  },
  { to: "/contacto", label: "Contáctame", icon: <FiMapPin size={20} /> },
];

const phrases = [
  "Frappés extraordinarios",
  "Para momentos extraordinarios ✨",
  "Desayunos sorpresas",
  "Para tu persona especial 💖",
];

function useTypewriter(phrases, speed = 60, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

  return display;
}

function Nav() {
  const text = useTypewriter(phrases);

  return (
    <nav
      className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(124,74,49,0.12)]
      rounded-2xl px-4 py-3 sm:px-5 lg:px-6"
    >
      {/* ── MÓVIL (< 768px): dos filas ── */}
      <div className="flex flex-col gap-2 md:hidden">
        {/* Fila 1: logo + frase */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/"
            className="flex items-center gap-2 select-none shrink-0"
          >
            <img src={logo} alt="Logo" className="w-8 h-8 sm:w-9 sm:h-9" />
            <div className="leading-tight">
              <span className="block text-base font-bold tracking-tight text-[#7c4a31]">
                FrappéLiz
              </span>
              <span className="block text-[9px] font-medium uppercase tracking-widest text-[#b07a5a]">
                Cuautepec, Gro.
              </span>
            </div>
          </NavLink>
          <div className="flex-1 min-w-0 rounded-xl border border-rose-100 bg-rose-50/60 px-3 py-2">
            <p className="text-xs font-medium text-[#7c4a31] truncate">
              {text}
              <span className="inline-block w-0.5 h-3.5 bg-[#7c4a31] ml-0.5 animate-pulse align-middle" />
            </p>
          </div>
        </div>
        {/* Fila 2: botones */}
        <ul className="flex gap-2">
          {links.map(({ to, label, icon }) => (
            <li key={to} className="flex-1">
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `flex items-center justify-center gap-1.5 rounded-xl px-2 py-2.5 text-xs font-semibold transition-all w-full
                  ${isActive ? "bg-[#7c4a31] text-white shadow-md" : "bg-rose-50 text-[#5b3c2d] hover:bg-rose-100 hover:text-[#7c4a31]"}`
                }
              >
                {icon}
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* ── TABLET (768px – 1023px): logo arriba centrado, frase + botones abajo en fila ── */}
      <div className="hidden md:flex lg:hidden flex-col gap-3">
        {/* Fila 1: logo centrado + frase */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className="flex items-center gap-2.5 select-none shrink-0"
          >
            <img src={logo} alt="Logo" className="w-9 h-9 sm:w-10 sm:h-10" />
            <div className="leading-tight">
              <span className="block text-xl font-bold tracking-tight text-[#7c4a31]">
                Frappé Liz
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-widest text-[#b07a5a]">
                Cuautepec, Gro.
              </span>
            </div>
          </NavLink>
          <div className="flex-1 min-w-0 rounded-xl border border-rose-100 bg-rose-50/60 px-4 py-2.5">
            <p className="text-sm font-medium text-[#7c4a31] truncate">
              {text}
              <span className="inline-block w-0.5 h-4 bg-[#7c4a31] ml-0.5 animate-pulse align-middle" />
            </p>
          </div>
        </div>
        {/* Fila 2: botones más grandes con descripción */}
        <ul className="flex gap-3">
          {links.map(({ to, label, icon }) => (
            <li key={to} className="flex-1">
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all w-full
                  ${isActive ? "bg-[#7c4a31] text-white shadow-md" : "bg-rose-50 text-[#5b3c2d] hover:bg-rose-100 hover:text-[#7c4a31]"}`
                }
              >
                {icon}
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* ── DESKTOP (≥ 1024px): una sola fila ── */}
      <div className="hidden lg:flex items-center gap-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5 select-none shrink-0"
        >
          <img src={logo} alt="Logo" className="w-10 h-10 sm:w-11 sm:h-11" />
          <div className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-[#7c4a31]">
              Frappé Liz
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-[#b07a5a]">
              Cuautepec, Gro.
            </span>
          </div>
        </NavLink>

        {/* Frase animada — centro */}
        <div className="flex-1 min-w-0 rounded-xl border border-rose-100 bg-rose-50/60 px-4 py-2.5">
          <p className="text-sm font-medium text-[#7c4a31] truncate">
            {text}
            <span className="inline-block w-0.5 h-4 bg-[#7c4a31] ml-0.5 animate-pulse align-middle" />
          </p>
        </div>

        {/* Botones — derecha */}
        <ul className="flex items-center gap-2 shrink-0">
          {links.map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all
                  ${isActive ? "bg-[#7c4a31] text-white shadow-md" : "bg-rose-50 text-[#5b3c2d] hover:bg-rose-100 hover:text-[#7c4a31]"}`
                }
              >
                {icon}
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export { Nav };
