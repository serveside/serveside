export default entriesLocation => async (req, res, next) => {
    const { component } = req.params;
    const componentProps = req.query;

    res.locals = { componentProps, component };
    
    try {
        const resolvePath = path.join(entriesLocation, component);
        const componentResolution = await import(resolvePath);
        res.locals = { ...componentResolution, ...res.locals };

        next();
    } catch (error) {
        res.locals = { error, ...res.locals };

        next("route");
    }
};
