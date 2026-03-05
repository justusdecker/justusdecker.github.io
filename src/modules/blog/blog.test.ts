import { describe, it, expect } from 'vitest';
import { blogRoutes } from './blog.routes';
import { type BlogPostMetadata } from './blog.types';
describe('GET /blog', () => {
  it('Webpage-data ACCESS', async () => {
    const result = await fetch('https://raw.githubusercontent.com/justusdecker/webpage-data/main/posts/index.json')
    
    expect(result.status).toBe(200);
  });
  it('Webpage-data SCHEMA VALIDATION', async () => {
    const response = await fetch('https://raw.githubusercontent.com/justusdecker/webpage-data/main/posts/index.json');
    expect(response.status).toBe(200);
    
    const data = (await response.json()) as BlogPostMetadata[];

    // 1. Grundlegende Struktur prüfen
    expect(Array.isArray(data)).toBe(true);

    // 2. Jedes Element im Array validieren
    data.forEach((post) => {
      expect(post).toMatchObject({
        id: expect.any(String),
        title: expect.any(String),
        date: expect.any(String)
      });
      
      // Optional: Sicherstellen, dass keine zusätzlichen unerwarteten Felder existieren
      const keys = Object.keys(post);
      expect(keys.length).toBe(3);
      expect(keys).toEqual(expect.arrayContaining(['id', 'title', 'date']));
    });
  });
  it('Webpage-data ACCESS', async () => {
    const result = await fetch('https://raw.githubusercontent.com/justusdecker/webpage-data/main/posts/index.json')
    result.body
    expect(result.status).toBe(200);
  });
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