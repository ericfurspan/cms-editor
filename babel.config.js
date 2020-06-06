module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: { node: 'current' },
      },
    ],
    ['@babel/preset-react', {}],
  ];

  const plugins = [
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
    ['@babel/plugin-syntax-dynamic-import', {}],
    ['@babel/plugin-transform-destructuring', {}],
    ['@babel/plugin-proposal-class-properties', {}],
    ['@babel/plugin-proposal-object-rest-spread', {}],
  ];

  return { presets, plugins };
};
