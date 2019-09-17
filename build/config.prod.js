// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import less from 'rollup-plugin-less';
import commonjs from 'rollup-plugin-commonjs';
import {uglify} from 'rollup-plugin-uglify';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/san-color.js',
        name: 'SanColor',
        format: 'umd',
        globals: {
            'san': 'san'
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
        commonjs(),
        uglify()
    ],
    external: ['san'],
    globals: {
        'san': 'san'
    }
};
