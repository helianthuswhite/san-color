// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import less from 'rollup-plugin-less';

export default {
    input: 'example/main.js',
    output: {
        name: 'index',
        file: 'dist/example.js',
        format: 'iife',
        globals: {
            'san': 'san',
            'san-color': 'SanColor'
        }
    },
    plugins: [
        resolve(),
        less({
            insert: true,
            output: false
        }),
        babel({
            exclude: 'node_modules/**', // 只编译我们的源代码
            runtimeHelpers: true
        }),
        serve()
    ],
    external: ['san', 'san-color']
};
