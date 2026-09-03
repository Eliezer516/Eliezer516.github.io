export interface Project {
  url: string;
  title: string;
  img: string;
  category: 'app' | 'website' | 'library';
  description: string;
}

export interface Filter {
  name: string;
  value: string;
}

export const projects: Project[] = [
  {
    url: 'https://travel-landing-page.onrender.com/',
    title: 'Travel Landing Page',
    img: `https://v1.screenshot.11ty.dev/${encodeURIComponent("https://travel-landing-page.onrender.com/")}/opengraph/`,
    category: 'website',
    description: 'Landing page para agencia de viajes que convierte visitantes en reservas directas.',
  },
  {
    url: 'https://dreamy-minsky-045cb7.netlify.app/',
    title: 'Formulario de registro',
    img: `https://v1.screenshot.11ty.dev/${encodeURIComponent("https://dreamy-minsky-045cb7.netlify.app/")}/opengraph/`,
    category: 'website',
    description: 'Formulario optimizado para captar leads cualificados sin fricción.',
  },
  {
    url: 'https://inverbapi3.onrender.com/',
    title: 'Escritorio contable',
    img: `https://v1.screenshot.11ty.dev/${encodeURIComponent("https://inverbapi3.onrender.com/")}/opengraph/`,
    category: 'website',
    description: 'Dashboard para automatizar la gestión contable y reducir horas manuales.',
  },
  {
    url: 'https://cosas-por-hacer.netlify.app/',
    title: 'To-Do App',
    img: `https://v1.screenshot.11ty.dev/${encodeURIComponent("https://cosas-por-hacer.netlify.app/")}/opengraph/`,
    category: 'app',
    description: 'Herramienta ligera para equipos pequeños que necesitan organizar tareas sin complejidad.',
  },
  {
    url: 'https://eliezer516.github.io/buscador-de-pelis-v2/',
    title: 'Buscador de películas',
    img: `https://v1.screenshot.11ty.dev/${encodeURIComponent("https://eliezer516.github.io/buscador-de-pelis-v2/")}/opengraph/`,
    category: 'app',
    description: 'Interfaz rápida para encontrar contenido sin perder tiempo navegando catálogos.',
  },
  {
    url: 'https://eliezer516.github.io/mdprev/',
    title: 'Mdprev',
    img: '/assets/img/mdprev.png',
    category: 'app',
    description: 'Editor Markdown con vista previa instantánea para creadores de contenido técnico.',
  },
  {
    url: 'https://eliezer516.github.io/minicode/',
    title: 'Minicode',
    img: '/assets/img/minicode.png',
    category: 'app',
    description: 'Playground de código minimalista para probar snippets al vuelo sin configurar entorno.',
  },
  {
    url: 'https://eliezer516.github.io/minijs/',
    title: 'Minijs',
    img: '/assets/img/minijs.png',
    category: 'app',
    description: 'Entorno JS minimalista para validar ideas rápido sin instalar dependencias.',
  },
  {
    url: 'https://www.npmjs.com/package/object-extractor',
    title: 'object-extractor',
    img: '/assets/img/object.png',
    category: 'library',
    description: 'Librería npm para extraer datos de objetos complejos sin escribir código repetitivo.',
  },
];

export const filters: Filter[] = [
  { name: 'Todo', value: 'all' },
  { name: 'Landing Pages', value: 'website' },
  { name: 'Apps / Herramientas', value: 'app' },
  { name: 'Librerías', value: 'library' },
];