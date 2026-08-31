import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from 'astro-icon';
import { qrcode } from 'vite-plugin-qrcode'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  output: 'static',
  integrations: [icon()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  vite: {
    plugins: [tailwindcss(), qrcode(), basicSsl()],
    server: {
      host: true,
      https: false
    }
  }
});
