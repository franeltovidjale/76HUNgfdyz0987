

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ou '/76HUNgfdyz0987/' pour la production
});


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ mode }) => ({
//   plugins: [react()],
//   base: mode === 'production' ? '/76HUNgfdyz0987/' : '/', // Base dynamique
//   build: {
//     outDir: 'dist',
//   },
// }));

