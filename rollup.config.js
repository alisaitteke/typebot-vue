import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import {terser} from 'rollup-plugin-terser'

export default [
    {
        input: 'src/plugin/index.ts',
        output: [
            {
                format: 'esm',
                file: 'dist/index.mjs',
                plugins: [terser()],
                sourcemap: true,
                exports: 'auto'
            },
            {
                format: 'cjs',
                file: 'dist/index.js',
                plugins: [terser()],
                sourcemap: true,
                exports: 'auto'
            }
        ],
        plugins: [
            vue(),
            typescript({
                check: false,
                tsconfigOverride: {
                    compilerOptions: {
                        sourceMap: true,
                        declaration: true,
                        declarationMap: true,
                    }
                }
            }),
            postcss(),
            peerDepsExternal()
        ],
        external: ['vue', 'nuxt'],
    }
]