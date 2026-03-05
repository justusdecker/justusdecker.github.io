import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import { homeRoutes } from './modules/home/home.routes'
import { blogRoutes } from './modules/blog/blog.routes'
const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to= "/home" replace />,
  },
  homeRoutes,
  blogRoutes
]);

function App() {
  return <RouterProvider router={router} />
}

export default App