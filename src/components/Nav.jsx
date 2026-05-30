import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiBook, FiMapPin } from "react-icons/fi";
import { MdDeliveryDining } from "react-icons/md";

const links = [
  { to: "/", label: "Carta", icon: <FiBook size={20} /> },
  {
    to: "/desayunos",
    label: "Desayunos",
    icon: <MdDeliveryDining size={22} />,
  },
  { to: "/contacto", label: "Contacto", icon: <FiMapPin size={20} /> },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-40 w-full rounded-2xl bg-white/80 px-5 py-3 shadow-[0_4px_24px_rgba(124,74,49,0.10)] backdrop-blur-md sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2.5 select-none">
            <span className="text-2xl leading-none">🧋</span>
            <div className="leading-tight">
              <span className="block text-lg font-bold tracking-tight text-[#7c4a31]">
                Frappé Liz
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-widest text-[#b07a5a]">
                Cuautepec, Gro.
              </span>
            </div>
          </NavLink>

          {/* Botones grandes — desktop */}
          <ul className="hidden items-center gap-2 sm:flex">
            {links.map(({ to, label, icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all
                    ${
                      isActive
                        ? "bg-[#7c4a31] text-white shadow-md"
                        : "bg-rose-50 text-[#5b3c2d] hover:bg-rose-100 hover:text-[#7c4a31]"
                    }`
                  }
                >
                  {icon}
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburguesa — móvil */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-[#7c4a31] transition hover:bg-rose-50 sm:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-200 sm:hidden
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Panel móvil */}
      <div
        className={`fixed left-0 right-0 top-[72px] z-30 mx-4 rounded-2xl bg-white p-4 shadow-[0_12px_40px_rgba(124,74,49,0.18)] transition-all duration-300 sm:hidden
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
      >
        <ul className="flex flex-col gap-2">
          {links.map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors
                  ${
                    isActive
                      ? "bg-[#7c4a31] text-white"
                      : "bg-rose-50 text-[#5b3c2d] hover:bg-rose-100"
                  }`
                }
              >
                {icon}
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export { Nav };
