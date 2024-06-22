import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'src/main.ts', // Chemin vers votre point d'entrée TypeScript
        output: [
            {
                file: 'dist/bundle.cjs.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'dist/bundle.esm.js',
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript(),
        ],
    },
];
