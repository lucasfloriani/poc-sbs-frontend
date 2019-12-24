const path = require('path')

module.exports = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@enums': path.resolve(__dirname, 'src', 'data', 'enums'),
      '@hocs': path.resolve(__dirname, 'src', 'hocs'),
      '@helpers': path.resolve(__dirname, 'src', 'helpers'),
      '@atoms': path.resolve(__dirname, 'src', 'components', 'atoms'),
      '@molecules': path.resolve(__dirname, 'src', 'components', 'molecules'),
      '@organisms': path.resolve(__dirname, 'src', 'components', 'organisms'),
      '@pages': path.resolve(__dirname, 'src', 'components', 'pages'),
      '@public': path.resolve(__dirname, 'public'),
      '@store': path.resolve(__dirname, 'src', 'store'),
      '@service': path.resolve(__dirname, 'src', 'services'),
      '@templates': path.resolve(__dirname, 'src', 'components', 'templates'),
      '@theme': path.resolve(__dirname, 'src', 'components', 'themes', 'default'),
    },
  },
})
