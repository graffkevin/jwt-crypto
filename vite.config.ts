// vite.config.ts
import { defineConfig, UserConfig as UserConfigVite  } from 'vite';
import { peerDependencies } from "./package.json";
import path from 'path';
import { UserConfig as InlineConfigVitest } from "vitest/config";

const allDependencies = [...Object.keys(peerDependencies), ...Object.keys(peerDependencies)];
const external = Array.from(new Set(allDependencies));

type UserConfig = UserConfigVite & {
    test: InlineConfigVitest["test"];
};

const config: UserConfig = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
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
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "test.config.ts",
    },
};

export default defineConfig(config);
