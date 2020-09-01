const presets = [
  [
    '@babel/preset-env',
    {
      modules: 'commonjs',
      targets: {
        node: 'current',
      },
    },
  ],
  [
    '@babel/preset-react',
    {
      development: process.env.NODE_ENV === 'development',
      useBuiltIns: true,
    },
  ],
];

const plugins = [
  //  'babel-plugin-nodejs-import-images',
  [
    '@babel/plugin-transform-destructuring',
    {
      useBuiltIns: true,
    },
  ],
];

const ignore = ['*.stories.js*', '**/dist/**'];

module.exports = (api) => {
  const env = api.env();
  const isProduction = api.env('production');
  api.cache.using(() => env);
  api.cache.invalidate(() => isProduction);

  return { plugins, presets, ignore };
};
