import imageLoading from "../../public/logos/loading.png";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#fffaf6] via-[#fdf6f0] to-[#f8efe8]">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative h-28 w-28">
          {/* Anillo giratorio */}
          <div className="absolute inset-0 rounded-full border-[3px] border-[#d8b89d] border-t-[#7c4a31] animate-spin"></div>

          {/* Glow */}
          <div className="absolute inset-2 rounded-full bg-[#f3e4d7] blur-xl opacity-70 animate-pulse"></div>

          {/* Imagen */}
          <div className="absolute inset-3 flex items-center justify-center rounded-full bg-white shadow-xl">
            <img
              src={imageLoading}
              alt="Cargando"
              className="h-16 w-16 object-contain animate-pulse"
            />
          </div>
        </div>

        {/* Texto */}
        <h2 className="mt-8 text-lg font-semibold tracking-wide text-[#7c4a31]">
          Preparando tu experiencia
        </h2>

        <p className="mt-2 text-sm text-[#8c6a56]">Un momento por favor...</p>

        {/* Barra de carga animada */}
        <div className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-[#ead7c8]">
          <div className="h-full w-1/2 rounded-full bg-[#7c4a31] animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </div>
  );
}

export { LoadingScreen };
