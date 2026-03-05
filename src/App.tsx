import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { homeRoutes } from './modules/home/home.routes'

const router = createHashRouter([
  homeRoutes,
]);

function App() {
  return <RouterProvider router={router} />
}

export default App