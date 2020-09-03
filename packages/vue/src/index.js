import Vue from 'vue';
import { createRenderer } from 'vue-server-renderer';

const renderer = createRenderer();

async function htmlLoader(req, res, next) {
  const { ResolvedComponent, componentProps, component } = req.locals;

  const vueComponent = new Vue({
    components: {
      ServeSideComponent: ResolvedComponent,
    },
    data: componentProps,
    template: '<ServeSideComponent/>',
  });

  try {
    const componentString = await renderer.renderToString(vueComponent);

    res.locals.html = `
          <div
              data-serveside-component="${component}"
              data-serveside-id="serveside_${req.id}"
          >${componentString}</div>
          <script>
              window.__SERVESIDE_LOAD_PROPS__ ||= {};
              window.__SERVESIDE_LOAD_PROPS__[${req.id}] = ${JSON.stringify(
  componentProps,
  null,
  3,
)};
          </script>
      `;

    next();
  } catch (error) {
    res.locals.error = error;

    next('route');
  }
}

function errorHtmlLoader(req, res, next) {
  const { componentProps, component, error } = req.locals;

  res.locals.html = `
        <div 
            data-serveside-component="${component}" 
            data-serveside-id="serveside_${req.id}"
        ></div>
        <script>              
            window.__SERVESIDE_LOAD_ERROR__ = ${JSON.stringify(error.message)};
            window.__SERVESIDE_LOAD_PROPS__ ||= {};
            window.__SERVESIDE_LOAD_PROPS__[${req.id}] = ${JSON.stringify(
  componentProps,
  null,
  3,
)};
        </script>
    `;

  next();
}

function htmlRenderer(__, res) {
  res.send(res.locals.html);
}

export { htmlLoader, errorHtmlLoader, htmlRenderer };
