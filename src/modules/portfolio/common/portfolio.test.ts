import { describe, it, expect } from 'vitest';
import { portfolioRoutes } from './portfolio.routes';

const endpoint = '/portfolio';
const routes = portfolioRoutes;

describe(`GET ${endpoint}`, () => {
  it(`Enpoint (${endpoint}) - register check`, () => {
    expect(routes.path).toBe(endpoint);
  });
   
  it(`(${endpoint}) should not throw 404`, () => {
    expect(routes).toBeDefined();
    expect(routes).not.toBeNull();
  });

  it(`(${endpoint}) should have a valid component [HTML/TSX] attached to the route`, () => {
    expect(routes.element).toBeDefined();
    expect(routes.element).not.toBeNull();
  });
});