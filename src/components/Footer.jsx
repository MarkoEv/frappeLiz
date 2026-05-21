import React from "react";

function Footer() {
  return (
    <div className="rounded-[2rem]  bg-rose-100/90 px-6 py-6 shadow-[0_18px_40px_rgba(124,74,49,0.12)] sm:flex sm:items-center sm:justify-between">
      <div>
        <p className="text-lg font-semibold text-[#3a2a20]">FrappeLiz</p>
        <p className="mt-2 text-sm text-[#6d4b3b]">
          Delicias artesanales con actitud fresca.
        </p>
      </div>
      <div className="mt-4 space-y-1 text-sm text-[#5b3c2d] sm:mt-0">
        <p>Lista para crecer: secciones y navegación futura ya contempladas.</p>
        <p>© 2026 FrappeLiz</p>
      </div>
    </div>
  );
}

export { Footer };
