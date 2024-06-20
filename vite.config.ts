// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: 'src/main.ts'
        }
    }
});
