import { describe, it, expect } from 'vitest';
import { trainingElectricianRoutes } from './training-electrician.routes';
import { GitHubRawBaseUrl } from '../common/constants';
const electricianRepo: string = `${GitHubRawBaseUrl}Elekro-Ausbildung-Lernstoff/main/summary/`;
describe('GET /training-electrician', () => {
  it('Enpoint (/training-electrician) - register check', () => {
    expect(trainingElectricianRoutes.path).toBe('/training-electrician');
  });
   
  it('(/training-electrician) should not throw 404', () => {
    expect(trainingElectricianRoutes).toBeDefined();
    expect(trainingElectricianRoutes).not.toBeNull();
  });

  it('(/training-electrician) should have a valid component [HTML/TSX] attached to the route', () => {
    expect(trainingElectricianRoutes.element).toBeDefined();
    expect(trainingElectricianRoutes.element).not.toBeNull();
  });
  const paths = ['weekly', 'monthly', 'quarterly', 'exam']
  for (const id in paths) {
    it(`data ACCESS for training-electrician:  /${paths[id]}`, async () => {
      const result = await fetch(`${electricianRepo}${paths[id]}/index.json`)
      
      expect(result.status).toBe(200);
    });
  }
  ""

  

});