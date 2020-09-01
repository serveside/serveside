import path from 'path';
import loadComponent from './loadComponent';
import Component from '../test-helpers/component';

describe('loadComponent', () => {
  const loadingComponent = loadComponent(
    path.join(__dirname, '../test-helpers'),
  );
  it('should set locals to the correct value', async () => {
    const res = {};
    await loadingComponent(
      {
        query: {},
        params: {
          component: 'component',
        },
      },
      res,
      () => null,
    );
    expect(res).toStrictEqual({
      locals: {
        component: 'component',
        componentProps: {},
        ResolvedComponent: Component,
      },
    });
  });
  it('should call next with no params if there are no errors', async () => {
    const next = jest.fn();
    await loadingComponent(
      {
        query: {},
        params: {
          component: 'component',
        },
      },
      {},
      next,
    );

    expect(next).toHaveBeenCalledWith();
  });
  it("should call next with 'route' param if there are errors", async () => {
    const next = jest.fn();
    await loadingComponent(
      {
        query: {},
        params: {
          component: 'no-component',
        },
      },
      {},
      next,
    );

    expect(next).toHaveBeenCalledWith('route');
  });
});
