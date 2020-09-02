import React from 'react';
import ReactDOMServer from 'react-dom/server';

function htmlLoader(req, res, next) {
  const { ResolvedComponent, componentProps, component } = req.locals;
  const componentString = ReactDOMServer.renderToString(
    <ResolvedComponent {...componentProps} />,
  );

  res.locals.html = (
    <>
      <div
        data-serveside-component={component}
        data-serveside-id={`se_embed_react_ssr_${req.id}`}
        dangerouslySetInnerHTML={{ __html: componentString }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.__SSR_AAS_LOAD_PROPS__ ||= {};
              window.__SSR_AAS_LOAD_PROPS__[${req.id}] = ${JSON.stringify(
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

function errorHtmlLoader(req, res, next) {
  const { componentProps, component, error } = req.locals;

  res.locals.html = (
    <>
      <div
        data-serveside-component={component}
        data-serveside-id={`se_embed_react_ssr_${req.id}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.__SSR_AAS_LOAD_ERROR__ = ${JSON.stringify(error.message)};
              window.__SSR_AAS_LOAD_PROPS__ ||= {};
              window.__SSR_AAS_LOAD_PROPS__[${req.id}] = ${JSON.stringify(
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
  const html = ReactDOMServer.renderToStaticMarkup(res.locals.html);
  res.send(html);
}

export { htmlLoader, errorHtmlLoader, htmlRenderer };
