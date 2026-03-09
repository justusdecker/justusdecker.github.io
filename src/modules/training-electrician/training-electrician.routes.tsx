
import { type RouteObject, Outlet } from 'react-router-dom';
import Header from '../common/header';

function Temp() {
  return (
    <>
        <h1>Hier ist was schiefgelaufen!</h1>
        <div>Diese Route wurde bis jetzt nicht verändert</div>
    </>

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
        { path: "weekly-summary", element: <Temp /> },
        { path: "monthly-summary", element: <Temp /> },
        { path: "quarterly-summary", element: <Temp /> },
        { path: "exam-preperation", element: <Temp /> },
        { path: "formulars-math", element: <Temp /> },
        { path: "laws", element: <Temp /> }
    ]
};