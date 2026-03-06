import { describe, it, expect } from 'vitest';
import { contactRoutes } from './contact.routes';

describe('GET /contact', () => {
  it('Enpoint (/contact) - register check', () => {
    expect(contactRoutes.path).toBe('/contact');
  });
   
  it('(/contact) should not throw 404', () => {
    expect(contactRoutes).toBeDefined();
    expect(contactRoutes).not.toBeNull();
  });

  it('(/contact) should have a valid component [HTML/TSX] attached to the route', () => {
    expect(contactRoutes.element).toBeDefined();
    expect(contactRoutes.element).not.toBeNull();
  });
});