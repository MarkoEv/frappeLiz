import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Menu } from "../pages/Menu";
import { Desayunos } from "../pages/Desayunos";
import { Contacto } from "../pages/Contacto";

function Nav() {
  return (
    <nav className="flex flex-col gap-4 rounded-2xl bg-rose-50 px-6 py-5 shadow-[0_18px_40px_rgba(124,74,49,0.12)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold text-[#7c4a31]">FrappeLiz</h2>
      </div>
      <ul className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#5b3c2d]">
        <li>
          <NavLink to="/">Menú</NavLink>
        </li>
        <li>
          <NavLink to="/desayunos">Desayunos</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export { Nav };
