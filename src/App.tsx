import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import { homeRoutes } from './modules/home/home.routes'

const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to= "/home" replace />,
  },
  homeRoutes,
]);

function App() {
  return <RouterProvider router={router} />
}

export default App