# Portafolio — Alan Orellana

## Antes de publicar, reemplaza estos placeholders

- `astro.config.mjs` → `site` y `base`
- `src/pages/index.astro` → `[LINKEDIN]`, `[GITHUB]`, `[PROYECTO 1/2/3]`, `[URL_PROYECTO_1/2/3]`
  (el correo ya está puesto: el contacto usa un botón `mailto:` directo a tu Gmail, no requiere ningún servicio externo)

## Pasos

1. **Instala Node.js** (si no lo tienes): https://nodejs.org (versión LTS)

2. **Instala las dependencias** dentro de esta carpeta:
   ```
   npm install
   ```

3. **Pruébalo localmente**:
   ```
   npm run dev
   ```
   Abre `http://localhost:4321`

4. **Sube el proyecto a un repositorio de GitHub**:
   ```
   git init
   git add .
   git commit -m "Primera versión del portafolio"
   git branch -M main
   git remote add origin https://github.com/[TU_USUARIO]/[NOMBRE_DEL_REPO].git
   git push -u origin main
   ```

6. **Activa GitHub Pages**: en tu repositorio, ve a Settings → Pages → Build and deployment → Source → selecciona **GitHub Actions**. El workflow ya incluido (`.github/workflows/deploy.yml`) construye y publica el sitio automáticamente en cada push a `main`.

7. Tu sitio quedará en `https://[TU_USUARIO].github.io/[NOMBRE_DEL_REPO]/` (o en `https://[TU_USUARIO].github.io/` si el repo se llama exactamente así — en ese caso borra la línea `base` de `astro.config.mjs`).
