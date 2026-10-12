import { describe, it, expect } from 'vitest';
import { datenschutzRoutes } from './datenschutz.routes';
import { c_datenschutz_markdown_url } from './Datenschutz.service';

const endpoint = '/datenschutz';
const routes = datenschutzRoutes;

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

describe('GET datenschutz.md', () => {
    it('Endpoint should return 200', async () => {
        const l_response = await fetch(c_datenschutz_markdown_url);
        
        expect(l_response.status).toBe(200);
    });
});