// vite.config.ts
import { defineConfig } from 'vite';
import { peerDependencies } from "./package.json";
import path from 'path';

const allDependencies = [...Object.keys(peerDependencies), ...Object.keys(peerDependencies)];
const external = Array.from(new Set(allDependencies));


export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // Assurez-vous d'ajuster ce chemin selon votre structure de projet
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: 'src/main.ts',
            },
            external,
        },
    },
});
