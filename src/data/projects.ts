export interface Project {
  url: string;
  title: string;
  img: string;
  category: 'app' | 'website' | 'library';
}

export interface Filter {
  name: string;
  value: string;
}

export const projects: Project[] = [
  {
    url: 'https://eliezer516.github.io/minicode/',
    title: 'Minicode',
    img: '/assets/img/minicode.png',
    category: 'app',
  },
  {
    url: 'https://eliezer516.github.io/minijs/',
    title: 'Minijs',
    img: '/assets/img/minijs.png',
    category: 'app',
  },
  {
    url: 'https://inverbapi3.onrender.com/',
    title: 'Escritorio contable',
    img: '/assets/img/escritorio.png',
    category: 'website',
  },
  {
    url: 'https://eliezer516.github.io/buscador-de-pelis-v2/',
    title: 'Buscador de peliculas',
    img: '/assets/img/pelis.png',
    category: 'app',
  },
  {
    url: 'https://dreamy-minsky-045cb7.netlify.app/',
    title: 'Fomulario de registro',
    img: '/assets/img/formulario.png',
    category: 'website',
  },
  {
    url: 'https://eliezer516.github.io/mdprev/',
    title: 'Mdprev',
    img: '/assets/img/mdprev.png',
    category: 'app',
  },
  {
    url: 'https://www.npmjs.com/package/object-extractor',
    title: 'object-extractor',
    img: '/assets/img/object.png',
    category: 'library',
  },
  {
    url: 'https://stoic-ardinghelli-e3cf6c.netlify.app/',
    title: 'Control de inventario',
    img: '/assets/img/inventario.png',
    category: 'app',
  },
  {
    url: 'https://cosas-por-hacer.netlify.app/',
    title: 'To-Do app',
    img: '/assets/img/todo.png',
    category: 'app',
  },
  {
    url: 'https://travel-landing-page.onrender.com/',
    title: 'Travel Landing Page',
    img: '/assets/img/landing.png',
    category: 'website',
  },
];

export const filters: Filter[] = [
  { name: 'Todo', value: 'all' },
  { name: 'Website', value: 'website' },
  { name: 'App', value: 'app' },
  { name: 'Libreria', value: 'library' },
];
