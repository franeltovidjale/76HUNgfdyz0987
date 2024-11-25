

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/76HUNgfdyz0987/',
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/76HUNgfdyz0987/' : '/', // Base dynamique
  build: {
    outDir: 'dist',
  },
}));

