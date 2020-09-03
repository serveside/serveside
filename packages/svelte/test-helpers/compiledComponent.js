import {
  create_ssr_component as createSsrComponent,
  escape,
} from 'svelte/internal';

const css = {
  code: 'h1.svelte-c33f9i{background-color:red}',
  map:
    '{"version":3,"file":"App.svelte","sources":["App.svelte"],"sourcesContent":["<script>\\n\\tlet name = \'world\';\\n</script>\\n\\n<style>\\n\\th1 {\\n\\t\\tbackground-color: red;\\n\\t}\\n</style>\\n\\n<h1>Hello {name}!</h1>"],"names":[],"mappings":"AAKC,EAAE,cAAC,CAAC,AACH,gBAAgB,CAAE,GAAG,AACtB,CAAC"}',
};

const name = 'world';

const App = createSsrComponent(($$result) => {
  $$result.css.add(css);
  return `<h1 class="${'svelte-c33f9i'}">Hello ${escape(name)}!</h1>`;
});

export default App;
