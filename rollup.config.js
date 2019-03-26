import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';

let pluginOptions = [
  resolve({
    browser: true
  }),
  commonjs(),
  babel({
    exclude: 'node_modules/**'
  }),
  copy({
    'typings': 'dist',
    verbose: true
  })
];

module.exports = {
  input: './src/index.js',
  output: {
    name: 'VueApexCharts', 
    file: 'dist/vue-apexcharts.js',
    format: 'umd',
    globals: {
      "apexcharts": "ApexCharts"
    }
  },
  external: [ 'apexcharts' ],
  plugins: pluginOptions
}