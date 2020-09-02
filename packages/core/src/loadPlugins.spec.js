import loadPlugins from './loadPlugins';

describe('loadPlugins', () => {
  it('should load no plugins if none are given', () => {
    expect(loadPlugins()).toStrictEqual([]);
  });
  it('should load plugins with res, req, and next', () => {
    const firstPlugin = jest.fn();
    const plugins = loadPlugins({ firstPlugin });

    const next = jest.fn();
    plugins[0]({}, {}, next);

    expect(firstPlugin).toHaveBeenCalledWith({}, {});
    expect(next).toHaveBeenCalledWith();
  });
  it('should send a 500 status code if the plugin returns truthy', () => {
    const firstPlugin = jest
      .fn()
      .mockImplementation(() => 'Something went wrong');
    const plugins = loadPlugins({ firstPlugin });

    const res = {
      status: jest.fn().mockImplementation(() => res),
      send: jest.fn().mockImplementation(() => res),
    };
    plugins[0]({}, res, jest.fn());

    expect(firstPlugin).toHaveBeenCalledWith({}, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('Something went wrong');
  });
  it('should go to the next route if the plugin throws an error', () => {
    const firstPlugin = jest.fn().mockImplementation(() => {
      throw new Error('Some error happened');
    });
    const plugins = loadPlugins({ firstPlugin });

    const next = jest.fn();
    const res = { locals: {} };
    plugins[0]({}, res, next);

    expect(firstPlugin).toHaveBeenCalledWith({}, res);
    expect(next).toHaveBeenCalledWith('route');
    expect(res.locals).toStrictEqual({
      error: new Error('Some error happened'),
    });
  });
});
