const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  addPlugins,
  babel,
  createConfig,
  customConfig,
  defineConstants,
  devServer,
  entryPoint,
  env,
  match,
  resolve,
  setOutput,
  sourceMaps,
  url,
} = require('webpack-blocks')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000
const sourceDir = process.env.SOURCE || 'src'
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')
const sourcePath = path.join(process.cwd(), sourceDir)
const outputPath = path.join(process.cwd(), 'dist')

const config = {
  ...createConfig([
    entryPoint(['babel-polyfill', sourcePath]),
    setOutput({
      filename: '[name].js',
      path: outputPath,
      publicPath,
    }),
    defineConstants({
      'process.env.NODE_ENV': process.env.NODE_ENV,
      'process.env.REACT_APP_API_URL': process.env.REACT_APP_API_URL,
      'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, ''),
    }),
    addPlugins([
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(process.cwd(), 'public/index.html'),
      }),
    ]),
    babel(),
    match([/\.(mp4|png|jpe?g|svg|woff2?|ttf|eot)$/], [url({ limit: 10000 })]),
    resolve({
      alias: {
        'react-dom': '@hot-loader/react-dom',
        '@atoms': path.resolve(__dirname, 'src', 'components', 'atoms'),
        '@containers': path.resolve(__dirname, 'src', 'containers'),
        '@enums': path.resolve(__dirname, 'src', 'data', 'enums'),
        '@helpers': path.resolve(__dirname, 'src', 'helpers'),
        '@molecules': path.resolve(__dirname, 'src', 'components', 'molecules'),
        '@organisms': path.resolve(__dirname, 'src', 'components', 'organisms'),
        '@pages': path.resolve(__dirname, 'src', 'components', 'pages'),
        '@public': path.resolve(__dirname, 'public'),
        '@service': path.resolve(__dirname, 'src', 'services'),
        '@store': path.resolve(__dirname, 'src', 'store'),
        '@templates': path.resolve(__dirname, 'src', 'components', 'templates'),
        '@theme': path.resolve(
          __dirname,
          'src',
          'components',
          'themes',
          'default'
        ),
      },
      extensions: ['.wasm', '.mjs', '.js', '.json'],
      modules: [].concat(sourceDir, ['node_modules']),
    }),

    env('development', [
      devServer({
        contentBase: 'public',
        stats: 'errors-only',
        historyApiFallback: { index: publicPath },
        headers: { 'Access-Control-Allow-Origin': '*' },
        host,
        port,
      }),
      sourceMaps(),
      addPlugins([new webpack.NamedModulesPlugin()]),
      defineConstants({
        'process.env.REACT_APP_API_URL': 'http://localhost:3333/',
      }),
    ]),

    env('production', [
      customConfig({
        optimization: {
          splitChunks: {
            chunks: 'all',
          },
          minimize: true,
        },
      }),
      defineConstants({
        'process.env.REACT_APP_API_URL': 'https://poc-sbs-backend.herokuapp.com/',
      }),
    ]),
  ]),
  mode: process.env.NODE_ENV,
}

module.exports = config
