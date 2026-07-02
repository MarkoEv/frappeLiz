import { registerSW } from "virtual:pwa-register";

export function registerServiceWorker() {
  if (typeof window === "undefined") return;

  const updateSW = registerSW({
    onNeedRefresh() {
      console.log("Nueva versión disponible.");
    },
    onOfflineReady() {
      console.log("Aplicación lista para funcionar sin conexión.");
    },
  });

  return updateSW;
}
