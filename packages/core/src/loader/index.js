import { Router } from "express";

import createRequestId from "./createRequestId";
import loadComponent from "./loadComponent";
import loadPlugins from "./loadPlugins";
import loadErrorHtml from "./loadErrorHtml";
import loadHtml from "./loadHtml";
import renderHtml from "./renderHtml";

const loaderRouter = Router();

export default (entriesLocation, plugins) => { 
    loaderRouter.use(
        "/:component",
        createRequestId,
        loadComponent(entriesLocation),
        ...loadPlugins(plugins),
        loadHtml,
        renderHtml
    );
    loaderRouter.use(
        "/:component",
        loadErrorHtml,
        renderHtml
    );
}
