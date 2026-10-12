import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// Si al final creas el repo con otro nombre, cambia "base" para que coincida.
export default defineConfig({
  site: "https://alanorellanaa503.github.io",
  base: "/portafolio-ao/",
  integrations: [icon()],
});