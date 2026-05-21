import React from "react";

function Carta() {
  return (
    <section className="rounded-[2rem] hidden bg-white/90 p-8 shadow-[0_22px_60px_rgba(124,74,49,0.08)]">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#4f7b53]">
            Carta
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-[#3a2a20]">
            Selecciona tu antojo
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6a4d3d]">
            Clásicos, creaciones del día y alternativas frescas para todos los
            gustos.
          </p>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {["Frappés", "Snacks", "Eskimos", "Licuados", "Comida"].map(
          (label, index) => (
            <button
              key={label}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${index === 0 ? "bg-[#7c4a31] text-white" : "bg-rose-100 text-[#6a4d3d] hover:bg-rose-200"}`}
            >
              {label}
            </button>
          ),
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            alt: "Frappé de fresa",
            title: "Frappé de fresa rosa",
            description: "Crema suave, fresas reales y topping de merengue.",
            price: "$12",
            src: "https://placehold.co/240x180/f8c5d8/7c4a31?text=Fresa",
          },
          {
            alt: "Licuado verde",
            title: "Licuado verde detox",
            description: "Espinaca, manzana y jengibre para un sorbo fresco.",
            price: "$11",
            src: "https://placehold.co/240x180/d8e8d4/7c4a31?text=Licuado",
          },
          {
            alt: "Snack artesanal",
            title: "Bowl crunchy",
            description: "Granola casera con frutos secos y yogurt de café.",
            price: "$14",
            src: "https://placehold.co/240x180/ffe4ec/7c4a31?text=Snack",
          },
          {
            alt: "Eskimo de café",
            title: "Eskimo moka",
            description: "Café frío, chocolate y cobertura de cacao.",
            price: "$13",
            src: "https://placehold.co/240x180/c7b49f/fff?text=Eskimo",
          },
          {
            alt: "Eskimo de matcha",
            title: "Eskimo matcha",
            description: "Matcha cremoso con galleta integral.",
            price: "$13",
            src: "https://placehold.co/240x180/a6c6a3/7c4a31?text=Matcha",
          },
          {
            alt: "Brownie",
            title: "Brownie café",
            description: "Denso, dulce y con un toque de café tostado.",
            price: "$9",
            src: "https://placehold.co/240x180/f4d0c7/7c4a31?text=Dulce",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-[#f2d7dc] bg-[#fff7f7] p-5 shadow-[0_18px_40px_rgba(124,74,49,0.08)]"
          >
            <img
              className="mb-5 h-44 w-full rounded-[1.5rem] object-cover"
              src={item.src}
              alt={item.alt}
            />
            <h3 className="text-xl font-semibold text-[#3a2a20]">
              {item.title}
            </h3>
            <p className="my-3 text-sm leading-6 text-[#6a4d3d]">
              {item.description}
            </p>
            <p className="text-lg font-bold text-[#7c4a31]">{item.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export { Carta };
