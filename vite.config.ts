import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssNesting from 'postcss-nesting';

// https://vite.dev/config/
export default defineConfig({
  base: '/SENA-ecommerce/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    postcss: {
      plugins: [postcssNesting()],
    },
  },
});
