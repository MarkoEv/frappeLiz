# Frappé Liz

Menú interactivo para Frappé Liz, un sitio web de pedido y catálogo de productos basado en React y Vite.

## Descripción

Aplicación responsive que muestra una carta filtrable por categoría y ofrece contacto directo por WhatsApp. Ideal para un negocio pequeño con enfoque en bebidas, postres y desayunos.

## Funcionalidad

- Navegación en `React Router` con rutas: `/`, `/desayunos`, `/contacto`
- Carta de productos con filtros por categoría
- Modos de vista: `cards` y `list`
- Pantalla de carga inicial
- Contacto directo por WhatsApp desde varias páginas

## Categorías incluidas

- `Snacks`
- `Frappés`
- `Waffles`
- `Tortas`
- `Crepas`
- `Eskimos`
- `Banderillas`
- `Bebidas`

## Tecnología

- React 19
- Vite
- Tailwind CSS 4
- React Router DOM 7
- Swiper
- React Icons
- ESLint

## Estructura clave

- `src/main.jsx` — punto de entrada
- `src/App.jsx` — router y layout general
- `src/components/` — `Nav`, `Footer`, `LoadingScreen`
- `src/pages/` — `Carta`, `Desayunos`, `Contacto`, `Menu`
- `src/productos/` — datos de menú y categorías
- `public/` — imágenes y assets estáticos

## Comandos

- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm preview`
- `pnpm lint`

## Observaciones

- WhatsApp está configurado en `src/pages/Desayunos.jsx` y `src/pages/Contacto.jsx`
- `src/pages/Menu.jsx` es un placeholder y puede completarse según necesidad
- Verificar que todas las imágenes en `public/` existan antes del despliegue

## Sugerencias para producción

- Actualizar números y enlaces de contacto reales
- Completar la página `Menu` si se desea otra sección
- Revisar bien los assets importados en `public/`
