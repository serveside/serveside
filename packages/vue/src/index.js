import Vue from "vue";
import VueSSR from "vue-server-renderer";

const renderer = VueSSR.createRenderer();

async function htmlLoader (req, res, next) {
    const { ResolvedComponent, componentProps, component } = req.locals;
  
    const vueComponent = new Vue({
      data: componentProps,
      template: ResolvedComponent
    });

    try {
      const componentString = await renderer.renderToString(vueComponent);

      res.locals.html = `
          <div 
              data-ssr-aas-component="${component}" 
              data-ssr-aas-id="se_embed_react_ssr_${req.id}"
          >${componentString}</div>
          <script>
              window.__SSR_AAS_LOAD_PROPS__ ||= {};
              window.__SSR_AAS_LOAD_PROPS__[${req.id}] = ${JSON.stringify(componentProps, null, 3)};
          </script>
      `;

      next();
    } catch (error) {
      res.locals.error = error;

      next("route");
    }
}


function errorHtmlLoader (req, res, next) {
    const { componentProps, component, error } = req.locals;

    res.locals.html = `
        <div 
            data-ssr-aas-component="${component}" 
            data-ssr-aas-id="se_embed_react_ssr_${req.id}"
        ></div>
        <script>              
            window.__SSR_AAS_LOAD_ERROR__ = ${JSON.stringify(error.message)};
            window.__SSR_AAS_LOAD_PROPS__ ||= {};
            window.__SSR_AAS_LOAD_PROPS__[${req.id}] = ${JSON.stringify(componentProps, null, 3)};
        </script>
    `;

    next();
}

function htmlRenderer (__, res) {
  res.send(res.locals.html);
}

export { htmlLoader, errorHtmlLoader, htmlRenderer };