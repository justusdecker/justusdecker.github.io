
import { type RouteObject, Outlet } from 'react-router-dom';
import Header from '../common/header';

function Temp() {
  return (
    <div>Dies ist ein temporärer Text!</div>
  );
}

export const trainingElectricianRoutes: RouteObject = {
    path: "/training-electrician",
    element: (
       <>
            <Header />
            <Outlet />
       </> 
    ),
    children: [
        {index: true, element: <Temp />},
        { path: "art", element: <Temp /> },
        { path: "craft", element: <Temp /> },
        { path: "dev", element: <Temp /> }
    ]
};