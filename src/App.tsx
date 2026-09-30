import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom'
import './modules/common/globals.css';
import './App.css';
import './modules/common/uie.css';
import { homeRoutes } from './modules/home/home.routes'
import { contactRoutes } from './modules/contact/contact.routes'
import ErrorPage from './modules/error/error.routes'
import { datenschutzRoutes } from './modules/datenschutz/datenschutz.routes'
import { cvRoutes } from './modules/cv/cv.routes'
import { certificatesRoutes } from './modules/certificates/certificates.routes'
import { toolsRoutes } from './modules/tools/tools.routes';
import { portfolioRoutes } from './modules/portfolio/common/portfolio.routes';


const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to= "/home" replace />,
    errorElement: <ErrorPage/>
  },
  homeRoutes,
  contactRoutes,
  datenschutzRoutes,
  cvRoutes,
  certificatesRoutes,
  toolsRoutes,
  portfolioRoutes
]);

function App() {
  return <RouterProvider router={router} />
}

export default App