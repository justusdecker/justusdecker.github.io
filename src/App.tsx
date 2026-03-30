import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom'
import './modules/common/globals.css';
import './App.css';

import { homeRoutes } from './modules/home/home.routes'
import { blogRoutes } from './modules/blog/blog.routes'
import { contactRoutes } from './modules/contact/contact.routes'
import { portfolioRoutes } from './modules/portfolio/portfolio.routes'
import ErrorPage from './modules/error/error.routes'
import { trainingElectricianRoutes } from './modules/training-electrician/training-electrician.routes'
import { datenschutzRoutes } from './modules/datenschutz/datenschutz.routes'
import { cvRoutes } from './modules/cv/cv.routes'
import { certificatesRoutes } from './modules/certificates/certificates.routes'
import { toolsRoutes } from './modules/tools/tools.routes';


const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to= "/home" replace />,
    errorElement: <ErrorPage/>
  },
  homeRoutes,
  blogRoutes,
  contactRoutes,
  portfolioRoutes,
  trainingElectricianRoutes,
  datenschutzRoutes,
  cvRoutes,
  certificatesRoutes,
  toolsRoutes
]);

function App() {
  return <RouterProvider router={router} />
}

export default App