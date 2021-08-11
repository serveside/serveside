/**
 * @module @serveside/core
 */

import { Router } from 'express';

import createRequestId from './createRequestId';
import loadComponent from './loadComponent';
import loadPlugins from './loadPlugins';

const loaderRouter = Router();

/**
 * @param root0
 * @param root0.entriesLocation
 * @param root0.plugins
 * @param root0.htmlLoader
 * @param root0.errorHtmlLoader
 * @param root0.htmlRenderer
 */
function core({
  entriesLocation = __dirname,
  plugins = [],
  htmlLoader = () => null,
  errorHtmlLoader = () => null,
  htmlRenderer = (_req, res) => res.send('Nothing'),
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
