---
title: Aloja un blog estatico con eleventy en GitHub Pages y GitHub Actions
desc: GitHub Pages es una muy buena herramienta para alojar sitios web completamente estaticos sin necesidad
date: 2023-10-20
eleventyComputed:
  metadata:
    title: "{{ title }}"
    desc: "{{ desc }}"
---

{{ page.url | formatUrl }}

![img](https://v1.screenshot.11ty.dev/{{ 'page.url' | url | formatUrl}}/opengraph/)

GitHub Pages es una muy buena herramienta para alojar sitios web completamente estaticos sin necesidad de muchos pasos, de hecho este portafolio esta alojado alli.

Pero apesar de su facilidad suele ser un poco coplicado (en algunos casos) alojar sitios construidos con ciertas tecnologias, como es el caso de [Eleventy](https://11ty.dev).

Bueno, en mi caso me costo un monton.

[Eleventy](https://11ty.dev) es un maravilloso (y sobretodo rapido) generador de sitios estaticos, este soporta diferentes formatos de plantillas (nunjucks, liquid, html, pug, ect) y tambien soporta Markdown, de hecho este es su mayor fuerte.

Pero al momento de alojar un sitio web o blog hay herramientas como [Render](https://render.com) o [Netlify](https://netlify.com) que hacen facil el proceso, pero otros, al ver que el sitio es solo contenido estatico, optan por utilizar el servicio de GitHub Pages.

Asi que en este tutorial te mostrare como implementar tu sitio en esta plataforma de manera rapida y sensilla, **asi que comencemos!**

## Crear archivo `build.yml`

En primer lugar, vas a ir al la carpeta donde tienes tu codigo y crearas un archivo en la raiz, el archivo es un `.yml` que utilizara Github Actions para construir el sitio y subirlo a GitHub Pages.

El archivo lo ubicaras aquí: `.github/workflows/build.yml`.

**Puedes sustituir el nombre de build por el que quieras**.

## Script para GitHub Actions

Una vez que lo tengas colocaras en su interior el siguiente codigo.


```yml
# Flujo de trabajo simple para implementar contenido estático en Github Pages
name: Implementar contenido estático a Pages

on:
  # Se ejecuta en anotaciones dirigidas a la rama predeterminada
  push:
    branches: ['main']

  # Te permite ejecutar este flujo de trabajo manualmente desde la pestaña Acciones
  workflow_dispatch:

# Establece los permisos de GITHUB_TOKEN para permitir la implementación en GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Permite una implementación simultánea
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  # Trabajo de implementación único ya que solo estamos implementando
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 7
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      - name: Install dependencies
        run: pnpm install
      - name: Build
        run: pnpm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          # Subir repositorio dist
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

En `path: './dist'` hay que sustituir `dist` por la carpeta de salida de eleventy, ya sea que se llame `out` u otro nombre, esto es muy importante se realizar, sino GitHub Pages no encontrara el archivo index.html.

___

**Ten en cuenta que para este ejemplo estoy utilizando el administrador de paquetes pnpm**

Si no lo quieres utilizar solo debes modificar las siguientes lineas:


```diff-yml diff-highlight
# ...
-     - uses: pnpm/action-setup@v2
-       with:
-         version: 7
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
-         cache: 'pnpm'
+         cache: 'npm'
      - name: Install dependencies
-       run: pnpm install
+       run: npm install
      - name: Build
-       run: pnpm run build
+       run: npm run build
# ...
```

Por increible que suene este es el ejemplo que utiliza Vite en su documentacion, el cual resuelve perfectamete nuestra necesidad.

## Hacer un `git push`

Ahora lo unico que resta es hacer in push al repositorio donde esta alojado el codigo y listo, solo hay que esperar a que GitHub Actions haga su __magia__.
