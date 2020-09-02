export default (plugins = {}) => Object.keys(plugins).map(
  (pluginKey) => function plugin(req, res, next) {
    try {
      const pluginResponse = plugins[pluginKey](req, res);

      if (pluginResponse) {
        res.status(500).send(pluginResponse);
      } else {
        next();
      }
    } catch (error) {
      res.locals.error = error;
      next('route');
    }
  },
);
