import { describe, it, expect } from 'vitest';
import { homeRoutes } from './home.routes';

describe('GET /home', () => {
  it('Enpoint (/home) - register check', () => {
    expect(homeRoutes.path).toBe('/home');
  });
   
  it('(/home) should not throw 404', () => {
    expect(homeRoutes).toBeDefined();
    expect(homeRoutes).not.toBeNull();
  });

  it('(/home) should have a valid component [HTML/TSX] attached to the route', () => {
    expect(homeRoutes.element).toBeDefined();
    expect(homeRoutes.element).not.toBeNull();
  });
});