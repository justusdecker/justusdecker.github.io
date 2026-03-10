
import { type RouteObject, Outlet } from 'react-router-dom';
import Header from '../common/header';
import Laws from './laws/laws';
import Glossar from './glossar/glossar';
import { WeeklySummaryOverview } from './weekly-summary/weekly-summary';
import { SummaryA4Page } from './common/summary';
import { TrainingElecticianMain } from './training-electrician';
import { MonthlySummaryOverview } from './monthly-summary/monthly-summary';

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
        {index: true, element: <TrainingElecticianMain />},
        { path: "weekly-summary", 
          children: [
              { index: true, element: <WeeklySummaryOverview /> }, 
              { path: ":id", element: <SummaryA4Page category='weekly' /> }
          ] },
        { path: "monthly-summary", 
          children: [
              { index: true, element: <MonthlySummaryOverview /> },
              { path: ":id", element: <SummaryA4Page category='monthly' /> }
          ] },
        { path: "quarterly-summary", element: <Temp /> },
        { path: "exam-preperation", element: <Temp /> },
        { path: "formulars-math", element: <Temp /> },
        { path: "laws", element: <Laws /> },
        { path: "glossar", element: <Glossar /> }
    ]
};