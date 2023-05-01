import { defineConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';
import preact from '@preact/preset-vite';
import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     react: 'preact/compat',
  //     'react-dom': 'preact/compat',
  //     'react-dom/test-utils': 'preact/test-utils',
  //     'react/jsx-runtime': 'preact/jsx-runtime',
  //   },
  // },
  plugins: [
    preact(),
    // Build Chrome Extension
    crx({ manifest }),
  ],
});
