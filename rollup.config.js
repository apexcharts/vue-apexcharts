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

// The source imports 'apexcharts/dist/apexcharts.min', not 'apexcharts'.
// rollup compares string entries in `external` against the whole import id, so
// listing 'apexcharts' alone never matched that subpath. The build stayed
// correct anyway only because apexcharts was absent from node_modules and could
// not be resolved, leaving rollup to externalise it with a warning. npm 7 and
// later install peerDependencies automatically, so it is present now, and
// node-resolve inlines the entire library: the bundle goes from 8 KB to 576 KB
// with a pinned copy of ApexCharts welded in, defeating the peer dependency.
// Match the package and every subpath instead of one exact id.
const isApexCharts = (id) => /^apexcharts(\/|$)/.test(id);

module.exports = {
  input: './src/index.js',
  output: {
    name: 'VueApexCharts',
    file: 'dist/vue-apexcharts.js',
    format: 'umd',
    globals: (id) => (isApexCharts(id) ? 'ApexCharts' : undefined)
  },
  external: isApexCharts,
  plugins: pluginOptions
}