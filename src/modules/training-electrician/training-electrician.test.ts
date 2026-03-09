import { describe, it, expect } from 'vitest';
import { trainingElectricianRoutes } from './training-electrician.routes';

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
  const paths = ['weekly-summary', 'monthly-summary', 'quarterly-summary', 'exam-preperation', 'formulars-math', 'laws']
  for (const id in paths) {
    it(`Webpage-data ACCESS for training-electrician:  /${paths[id]}`, async () => {
      const result = await fetch(`https://raw.githubusercontent.com/justusdecker/webpage-data/main/portfolio/${paths[id]}/index.json`)
      //! The Backend URL is wrong - The Electrician Stuff will be in justusdecker/Elekro-Ausbildung-Lernstoff
      expect(result.status).toBe(200);
    });
  }
  

  

});