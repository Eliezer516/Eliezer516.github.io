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
    img: '/assets/img/landing.png',
    category: 'website',
    description: 'Landing page para agencia de viajes que convierte visitantes en reservas directas.',
  },
  {
    url: 'https://dreamy-minsky-045cb7.netlify.app/',
    title: 'Formulario de registro',
    img: '/assets/img/formulario.png',
    category: 'website',
    description: 'Formulario optimizado para captar leads cualificados sin fricción.',
  },
  {
    url: 'https://inverbapi3.onrender.com/',
    title: 'Escritorio contable',
    img: '/assets/img/escritorio.png',
    category: 'website',
    description: 'Dashboard para automatizar la gestión contable y reducir horas manuales.',
  },
  {
    url: 'https://stoic-ardinghelli-e3cf6c.netlify.app/',
    title: 'Control de inventario',
    img: '/assets/img/inventario.png',
    category: 'app',
    description: 'App para PYMES que elimina hojas de cálculo y centraliza el stock en tiempo real.',
  },
  {
    url: 'https://cosas-por-hacer.netlify.app/',
    title: 'To-Do App',
    img: '/assets/img/todo.png',
    category: 'app',
    description: 'Herramienta ligera para equipos pequeños que necesitan organizar tareas sin complejidad.',
  },
  {
    url: 'https://eliezer516.github.io/buscador-de-pelis-v2/',
    title: 'Buscador de películas',
    img: '/assets/img/pelis.png',
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