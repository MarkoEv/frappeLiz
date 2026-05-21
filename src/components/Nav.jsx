import React from "react";

function Nav() {
  return (
    <nav className="flex flex-col gap-4 rounded-2xl bg-rose-50 px-6 py-5 shadow-[0_18px_40px_rgba(124,74,49,0.12)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src="https://placehold.co/40x40/f8c5d8/7c4a31?text=FL"
          alt="FrappeLiz logo"
        />
      </div>
      <ul className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#5b3c2d]">
        <li className="cursor-pointer hover:text-[#7c4a31]">Inicio</li>
        <li className="cursor-pointer hover:text-[#7c4a31]">Menú</li>
        <li className="cursor-pointer hover:text-[#7c4a31]">Nosotros</li>
        <li className="cursor-pointer hover:text-[#7c4a31]">Contacto</li>
      </ul>
    </nav>
  );
}

export { Nav };
