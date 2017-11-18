import uglify from 'rollup-plugin-uglify';
import { onWarn } from './rollup-onwarn'

var debug = process.env.DEBUG;
var pluginList = [];
if (!debug) {
  pluginList.push(uglify());
}
var config = {
  input: 'src/js/index.js',
  plugins: pluginList,
  onwarn: onWarn,
  output: {
    format: 'es',
    file: 'www/js/index.js'
  },
  name: 'app'
}
if (debug) {
  config.sourcemap = 'inline'
}
export default config;
