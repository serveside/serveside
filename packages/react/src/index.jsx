/**
 * @module @serveside/react
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { isValidElementType } from 'react-is';

function htmlLoader(req, res, next) {
  const { ResolvedComponent, componentProps, component } = req.locals;
  try {
    if (!isValidElementType(ResolvedComponent)) {
      throw new Error('invalid element type', { ...req.locals });
    }
    const componentString = ReactDOMServer.renderToString(
      <ResolvedComponent {...componentProps} />,
    );

    res.locals.jsx = (
      <>
        <div
          data-serveside-component={component}
          data-serveside-id={`serveside_${req.id}`}
          dangerouslySetInnerHTML={{ __html: componentString }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.__SERVESIDE_LOAD_PROPS__ ||= {};
                window.__SERVESIDE_LOAD_PROPS__[${req.id}] = ${JSON.stringify(
              componentProps,
              null,
              3,
            )};
                `,
          }}
        />
      </>
    );
    next();
  } catch (error) {
    res.locals.error = error;
    next('route');
  }
}

function errorHtmlLoader(req, res, next) {
  const { componentProps, component, error } = req.locals;

  res.locals.jsx = (
    <>
      <div
        data-serveside-component={component}
        data-serveside-id={`serveside_${req.id}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.__SERVESIDE_LOAD_ERROR__ = ${JSON.stringify(
            error.message,
          )};
              window.__SERVESIDE_LOAD_PROPS__ ||= {};
              window.__SERVESIDE_LOAD_PROPS__[${req.id}] = ${JSON.stringify(
            componentProps,
            null,
            3,
          )};
              `,
        }}
      />
    </>
  );

  next();
}

function htmlRenderer(__, res) {
  const html = ReactDOMServer.renderToStaticMarkup(res.locals.jsx);
  res.send(html);
}

export { htmlLoader, errorHtmlLoader, htmlRenderer };
