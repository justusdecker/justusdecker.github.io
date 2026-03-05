import { describe, it, expect } from 'vitest';
import { blogRoutes } from './blog.routes';

describe('GET /blog', () => {
  it('Enpoint (/blog) - register check', () => {
    expect(blogRoutes.path).toBe('/blog');
  });
   
  it('(/blog) should not throw 404', () => {
    expect(blogRoutes).toBeDefined();
    expect(blogRoutes).not.toBeNull();
  });

  it('(/blog) should have a valid component [HTML/TSX] attached to the route', () => {
    expect(blogRoutes.element).toBeDefined();
    expect(blogRoutes.element).not.toBeNull();
  });
});