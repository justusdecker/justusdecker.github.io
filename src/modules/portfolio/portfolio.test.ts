import { describe, it, expect } from 'vitest';
import { portfolioRoutes } from './portfolio.routes';

describe('GET /portfolio', () => {
  it('Enpoint (/portfolio) - register check', () => {
    expect(portfolioRoutes.path).toBe('/portfolio');
  });
   
  it('(/portfolio) should not throw 404', () => {
    expect(portfolioRoutes).toBeDefined();
    expect(portfolioRoutes).not.toBeNull();
  });

  it('(/portfolio) should have a valid component [HTML/TSX] attached to the route', () => {
    expect(portfolioRoutes.element).toBeDefined();
    expect(portfolioRoutes.element).not.toBeNull();
  });
});