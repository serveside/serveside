import { Router } from 'express';

import createRequestId from './createRequestId';
import loadComponent from './loadComponent';
import loadPlugins from './loadPlugins';

const loaderRouter = Router();

function core({
  entriesLocation = __dirname,
  plugins = [],
  htmlLoader = () => null,
  errorHtmlLoader = () => null,
  htmlRenderer = (res) => res.send('Nothing'),
}) {
  loaderRouter.use(
    '/:component',
    createRequestId,
    loadComponent(entriesLocation),
    ...loadPlugins(plugins),
    htmlLoader,
    htmlRenderer,
  );
  loaderRouter.use('/:component', errorHtmlLoader, htmlRenderer);
}

export default core;
