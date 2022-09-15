module.exports = {
  presets: [
    ['@babel/preset-env', { modules: 'auto' }],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ]
  ]
}
