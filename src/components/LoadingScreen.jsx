import imageLoading from "../../public/logos/loading.png";

function LoadingScreen() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fdf6f0]"
    >
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 rounded-full border-[3px] border-[#ead7c8] border-t-[#7c4a31] animate-spin" />

          <div className="absolute inset-3 flex items-center justify-center rounded-full bg-white shadow-sm">
            <img
              src={imageLoading}
              alt="Cargando"
              className="h-12 w-12 object-contain"
            />
          </div>
        </div>

        {/* Texto */}
        <h2 className="mt-6 text-base font-medium text-[#7c4a31]">
          Preparando tu experiencia
        </h2>

        <p className="mt-1 text-sm text-[#8c6a56]">Un momento por favor...</p>
      </div>
    </div>
  );
}

export { LoadingScreen };
