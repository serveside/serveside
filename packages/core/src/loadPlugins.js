export default (plugins) => Object.keys(plugins).map((pluginKey) => {
  console.log(`Loading plugin with key: ${pluginKey}`);

  return (res, req, next) => {
    plugins[pluginKey](res, req, next);

    next();
  };
});
