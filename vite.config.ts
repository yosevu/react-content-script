import { defineConfig } from 'vite';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json';
import preact from '@preact/preset-vite';

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
