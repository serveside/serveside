export default plugins => Object.keys(plugins).map(pluginKey => {
    console.log(`Loading plugin with key: ${pluginKey}`);

    return plugins[pluginKey];
});
