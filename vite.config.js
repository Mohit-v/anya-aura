import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // use '/' if deploying to root, or '/your-subpath/' if under a subpath
});

