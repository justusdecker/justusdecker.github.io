import { type RouteObject } from 'react-router-dom';

import Header from '../common/header';
import '../common/listed-items-blog-style.css'
import { CVOverview } from './cv';

export const cvRoutes: RouteObject = {
  path: '/cv',
  element: (
    <>
        <Header />
        <CVOverview />
    </>
  ),
};